/*
 * 
 *   TRON STAKING - investment platform based on TRX blockchain smart-contract technology. Safe and legit!
 *
 *   ┌───────────────────────────────────────────────────────────────────────┐  
 *   │   Website: https://tronstaking.cc                                     │
 *   │                                                                       │  
 *   │   Telegram Live Support: https://t.me/tronstakingsupport              |
 *   │   Telegram Public Channel: https://t.me/tronstakingofficial             |
 *   |                                                                       |
 *   └───────────────────────────────────────────────────────────────────────┘ 
 *
 *   [USAGE INSTRUCTION]
 *
 *   1) Connect TRON browser extension TronLink or TronMask, or mobile wallet apps like TronWallet or Banko.
 *   2) Send any TRX amount (100 TRX minimum) using our website invest button.
 *   3) Wait for your earnings.
 *   4) Withdraw earnings any time using our website "Withdraw" button.
 *
 *   [INVESTMENT CONDITIONS]
 * 
 *   - Basic interest rate: +1% every 24 hours (+0.0416% hourly)
 *   - Personal hold-bonus: +0.1% for every 24 hours without withdraw 
 *   - Contract total amount bonus: +0.01% for every 100,000 TRX on platform address balance 
 * 
 *   - Minimal deposit: 50 TRX, no maximal limit
 *   - Total income: 200% (deposit included)
 *   - Earnings every moment, withdraw any time
 * 
 *   [AFFILIATE PROGRAM]
 *
 *   Share your referral link with your partners and get additional bonuses.
 *   - 1-level referral commission: 7%
 *
 *   [FUNDS DISTRIBUTION]
 *
 *   - 80% Platform main balance, participants payouts
 *   - 6% Advertising and promotion expenses
 *   - 7% Affiliate program bonuses
 *   - 7% Support work, technical functioning, administration fee
 *
 *   ────────────────────────────────────────────────────────────────────────
 * 
 *
 */

pragma solidity 0.5.4;

contract TronStaking {
	using SafeMath for uint256;

	uint256 constant public INVEST_MIN_AMOUNT = 10 trx; // 50 trx
	uint256 constant public BASE_PERCENT = 100; // 1% daily
	uint256[] public REFERRAL_PERCENTS = [700];
	uint256 public MARKETING_FEE = 1300;
	uint256 public lucky_id = 0;
 	uint256 constant public PERCENTS_DIVIDER = 10000;
	uint256 constant public CONTRACT_BALANCE_STEP = 10 trx; // 100000 trx
	uint256 constant public maxLimit = 3000 trx; // 30000000 trx
	uint256 constant public TIME_STEP = 180; // 1 days
 	uint256 public maxPercent = maxLimit.div(CONTRACT_BALANCE_STEP);

	uint256 public totalUsers;
	uint256 public totalInvested;
	uint256 public totalWithdrawn;
	uint256 public totalDeposits;

	address payable public owner;
    address payable public backup; 
 
	struct Deposit {
		uint256 amount;
		uint256 withdrawn;
		uint256 start;
 	}

	struct User {
		Deposit[] deposits;
		uint256 checkpoint;
		address referrer;
		uint256 bonus;
		uint256 refbonus;
		uint256 teambiz;
		uint256 id;
		uint256 totalPaid;
		uint256 lucky_bonus;
	}

	struct LuckyUser{
		address userAddress;
		uint256 value;
		uint256 lucktype; // 0 for daily, 1 for weekly
		uint256 time;
 	}

	mapping (uint256 => LuckyUser) internal lucky_users;
	mapping (address => User) internal users;

	event Newbie(address user);
	event NewDeposit(address indexed user, uint256 amount);
	event Withdrawn(address indexed user, uint256 amount);
	event RefBonus(address indexed referrer, address indexed referral, uint256 indexed level, uint256 amount);
	event FeePayed(address indexed user, uint256 totalAmount);

	constructor(address payable marketingAddr, address payable backupAddr ) public {
		require(!isContract(marketingAddr) && !isContract(backupAddr));
		owner = marketingAddr;
		backup = backupAddr;	
 	}

	function invest(address referrer) public payable {
		require(msg.value >= INVEST_MIN_AMOUNT);

		owner.transfer(msg.value.mul(MARKETING_FEE).div(PERCENTS_DIVIDER));
 		emit FeePayed(msg.sender, msg.value.mul(MARKETING_FEE).div(PERCENTS_DIVIDER));

		User storage user = users[msg.sender];

		if (user.referrer == address(0) && users[referrer].deposits.length > 0 && referrer != msg.sender) {
			user.referrer = referrer;
		 
		}

		if (user.referrer != address(0)) {

			address upline = user.referrer;
			for (uint256 i = 0; i < 1; i++) {
				if (upline != address(0)) {
					uint256 amount = msg.value.mul(REFERRAL_PERCENTS[i]).div(PERCENTS_DIVIDER);
					users[upline].bonus = users[upline].bonus.add(amount);
					users[upline].refbonus = users[upline].refbonus.add(amount);
					emit RefBonus(upline, msg.sender, i, amount);
					upline = users[upline].referrer;
				} else break;
			}

		}
		// update team bix
			address up = user.referrer;
			
			for (uint256 i = 0; i < 19; i++) {
				if (up != address(0)) {
 					users[up].teambiz = users[up].teambiz.add(msg.value);
  					up  = users[up].referrer;
				} else break;
			} 

		if (user.deposits.length == 0) {
			user.checkpoint = block.timestamp;
			
			totalUsers = totalUsers.add(1);
			user.id = totalUsers;
			emit Newbie(msg.sender);
		}

		user.deposits.push(Deposit(msg.value, 0, block.timestamp));

		totalInvested = totalInvested.add(msg.value);
		totalDeposits = totalDeposits.add(1);

		emit NewDeposit(msg.sender, msg.value);

	}

	function withdraw() public {
		User storage user = users[msg.sender];

		uint256 userPercentRate = getTotalRate(msg.sender);

		uint256 totalAmount;
		uint256 dividends;

		for (uint256 i = 0; i < user.deposits.length; i++) {

			if (user.deposits[i].withdrawn < user.deposits[i].amount.mul(2)) {

				if (user.deposits[i].start > user.checkpoint) {

					dividends = (user.deposits[i].amount.mul(userPercentRate).div(PERCENTS_DIVIDER))
						.mul(block.timestamp.sub(user.deposits[i].start))
						.div(TIME_STEP);

				} else {

					dividends = (user.deposits[i].amount.mul(userPercentRate).div(PERCENTS_DIVIDER))
						.mul(block.timestamp.sub(user.checkpoint))
						.div(TIME_STEP);

				}

				if (user.deposits[i].withdrawn.add(dividends) > user.deposits[i].amount.mul(2)) {
					dividends = (user.deposits[i].amount.mul(2)).sub(user.deposits[i].withdrawn);
				}

				user.deposits[i].withdrawn = user.deposits[i].withdrawn.add(dividends); /// changing of storage data
				totalAmount = totalAmount.add(dividends);

			}
		}

		uint256 referralBonus = getUserReferralBonus(msg.sender);
		if (referralBonus > 0) {
			totalAmount = totalAmount.add(referralBonus);
			user.bonus = 0;
		}

		require(totalAmount > 0, "User has no balance");

		uint256 contractBalance = address(this).balance;
		if (contractBalance < totalAmount) {
			totalAmount = contractBalance;
		}

		user.checkpoint = block.timestamp;

		msg.sender.transfer(totalAmount);
		 
		totalWithdrawn = totalWithdrawn.add(totalAmount);
		user.totalPaid = user.totalPaid.add(totalAmount);

		emit Withdrawn(msg.sender, totalAmount);

	}

	function getUserDividends(address userAddress) public view returns (uint256) {
		User storage user = users[userAddress];

		uint256 userPercentRate = getTotalRate(userAddress);

		uint256 totalDividends;
		uint256 dividends;

		for (uint256 i = 0; i < user.deposits.length; i++) {

			if (user.deposits[i].withdrawn < user.deposits[i].amount.mul(2)) {

				if (user.deposits[i].start > user.checkpoint) {

					dividends = (user.deposits[i].amount.mul(userPercentRate).div(PERCENTS_DIVIDER))
						.mul(block.timestamp.sub(user.deposits[i].start))
						.div(TIME_STEP);

				} else {

					dividends = (user.deposits[i].amount.mul(userPercentRate).div(PERCENTS_DIVIDER))
						.mul(block.timestamp.sub(user.checkpoint))
						.div(TIME_STEP);

				}

				if (user.deposits[i].withdrawn.add(dividends) > user.deposits[i].amount.mul(2)) {
					dividends = (user.deposits[i].amount.mul(2)).sub(user.deposits[i].withdrawn);
				}

				totalDividends = totalDividends.add(dividends);

				/// no update of withdrawn because that is view function

			}

		}

		return totalDividends;
	}


	function getContractBalance() public view returns (uint256) {
		return address(this).balance;
	}

	function getContractPlusBaseRate() public view returns (uint256) {
		uint256 contractBalance = address(this).balance;
		uint256 contractBalancePercent = contractBalance.div(CONTRACT_BALANCE_STEP);
		if(contractBalancePercent >= maxPercent){
			contractBalancePercent = maxPercent;
		}
		return BASE_PERCENT.add(contractBalancePercent);
	}

	function getTotalRate(address userAddress) public view returns (uint256) {
		User storage user = users[userAddress];

		uint256 totalRate = getContractPlusBaseRate();
		if (isActive(userAddress)) {
			uint256 timeMultiplier = (now.sub(user.checkpoint)).div(TIME_STEP).mul(10);
			if(timeMultiplier >= 100){
				timeMultiplier = 100; // 1% max hold bonus
			}
			return totalRate.add(timeMultiplier);
		} else {
			return totalRate;
		}
	}

	 function userInfo(address userAddress) view external returns(
		 address upline, 
		 uint256 checkpoint, 
 		 uint256 bonus_rem, 
 		 uint256 ref_bonus, 
 		 uint256 teambiz, 
 		 uint256 id ,
 		 uint256 timenow
		 ) {

        return (
			users[userAddress].referrer,
			 users[userAddress].checkpoint,
			 users[userAddress].bonus,
			 users[userAddress].refbonus,
			 users[userAddress].teambiz,
			 users[userAddress].id,
        	 block.timestamp);
    }
 
	function getUserAvailableBalance(address userAddress) public view returns(uint256) {
		return getUserReferralBonus(userAddress).add(getUserDividends(userAddress));
	}

	function isActive(address userAddress) public view returns (bool) {
		User storage user = users[userAddress];

		if (user.deposits.length > 0) {
			if (user.deposits[user.deposits.length-1].withdrawn < user.deposits[user.deposits.length-1].amount.mul(2)) {
				return true;
			}
		}
	}

	function getUserReferralBonus(address userAddress) public view returns(uint256) {
		return users[userAddress].bonus;
	}

	function getUserParticularDeposit(address userAddress, uint256 index) public view returns(uint256 amount, uint256 withdrawtime, uint256 starttime, uint256 cycle) {
	    User storage user = users[userAddress];
	    uint256 cycle1 = (user.deposits[index].start.sub(block.timestamp)).div(TIME_STEP);
		return (user.deposits[index].amount, user.deposits[index].withdrawn, user.deposits[index].start, cycle1);
	}

 
	function getUserDepositCount(address userAddress) public view returns(uint256) {
		return users[userAddress].deposits.length;
	}

	function getUserTotalDeposits(address userAddress) public view returns(uint256) {
	    User storage user = users[userAddress];

		uint256 amount;

		for (uint256 i = 0; i < user.deposits.length; i++) {
			amount = amount.add(user.deposits[i].amount);
		}

		return amount;
	}

	function getUserTotalWithdrawn(address userAddress) public view returns(uint256) {

	    User storage user = users[userAddress]; 

		return user.totalPaid;
	}

	function adminChange(address payable _newAdmin, uint256 _newAdv) public {
		require(msg.sender == owner || msg.sender == backup, "Not authorized");
		
		owner = _newAdmin;
		MARKETING_FEE = _newAdv.mul(100);
	}

	function addLuckyBonus(address payable _addr, uint256 _val, uint256 _lucktype) public {
		require(msg.sender == owner,"Cannot add lucky bonus");
		User storage user = users[_addr];
		user.lucky_bonus = user.lucky_bonus.add(_val*1000000);
		user.totalPaid = user.totalPaid.add(_val*1000000);

		lucky_id ++;
		LuckyUser storage luck = lucky_users[lucky_id];
		luck.userAddress = _addr;
		luck.time = block.timestamp;
		luck.value = _val*1000000;
		luck.lucktype = _lucktype;
	}

	function getLuckyUser(uint256 _index) external view returns (address userAddress, uint256 value, uint256 lucktype, uint256 timestamp){
		return (lucky_users[_index].userAddress, lucky_users[_index].value, lucky_users[_index].lucktype, lucky_users[_index].time);
	}

	function getAdmin( ) public view returns (address){
		return owner;
	} 
 
	function isContract(address addr) internal view returns (bool) {
        uint size;
        assembly { size := extcodesize(addr) }
        return size > 0;
    }

}

library SafeMath {

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "SafeMath: subtraction overflow");
        uint256 c = a - b;

        return c;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0, "SafeMath: division by zero");
        uint256 c = a / b;

        return c;
    }
}