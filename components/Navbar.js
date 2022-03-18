import React from 'react';
import Image from 'next/image';
import avatar from '../temp/(small)headshot (2).jpg'

const style = {
	wrapper: `h-16 w-full bg-black text-white flex md:justify-around items -center px-60 z-20`
};

const Navbar = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.leftMenu}>
				<div className={style.logo}>Uber</div>
				<div className={style.menuItem}>Ride</div>
				<div className={style.menuItem}>Drive</div>
				<div className={style.menuItem}>More</div>
			</div>
            <div className={style.rightMenu}>
                <div className={style.menuItem}>Help</div>
                <div className={style.menuItem}>Joe</div>
                <div className={style.userImageContainer}>
                    <img src={avatar} width={50} height={50} />
                    </div>
                    <div>0x00000....00000</div>
                </div>
		</div>
	);
};

export default Navbar;
