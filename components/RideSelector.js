import uberX from '../assets/rides/uberX.png';
import uberBlack from '../assets/rides/uberBlack.png';
import uberBlackSuv from '../assets/rides/uberBlackSuv.png';
import uberSelect from '../assets/rides/uberSelect.png';
import uberXL from '../assets/rides/uberXL.png';
import Image from 'next/Image'

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

const basePrice = 1542

const RideSelector = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.title}>Choose a ride, or swipe up for more</div>
			<div className={style.carList}>
        {carList.map((car, index) => (
          <div clasName={style.car}>
            <Image 
            src={car.iconUrl}
            className={style.carImage}
            height={50}
            width={50}
            />
			<div className={style.carDetails}>
				<div className={style.service}>{car.service}</div>
				<div className={style.time}>5 minutes away</div>
			</div>
			<div className={style.priceContainer}>
			{((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
			</div>
          </div>
        ))}
      </div>
		</div>
	)
}

export default RideSelector;
