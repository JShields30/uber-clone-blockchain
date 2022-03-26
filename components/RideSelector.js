import uberX from '../assets/images/uberX.png';
import uberBlack from '../assets/rides/uberBlack.png';
import uberBlackSuv from '../assets/rides/uberBlackSuv.png';
import uberSelect from '../assets/rides/uberSelect.png';
import uberXL from '../assets/rides/uberXL.png';

const style = {};

const carList = [
	{
		service: 'UberX',
		iconUrl: uberX,
		priceMultiplier: 1,
	},
  {
		service: 'UberBlack',
		iconUrl: uberBlack,
		priceMultiplier: 1.5,
	},
  {
		service: 'UberBlackSuv',
		iconUrl: uberBlackSuv,
		priceMultiplier: 1.5,
	},
  {
		service: 'UberSelect',
		iconUrl: uberSelect,
		priceMultiplier: 1.5,
	},
  {
		service: 'UberXL',
		iconUrl: uberXL,
		priceMultiplier: 1.5,
	}
];

const RideSelector = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.title}></div>
			<div className={style.carList}></div>
		</div>
	);
};

export default RideSelector;
