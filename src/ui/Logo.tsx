import React from 'react';
import {useNavigate} from "react-router-dom";

const Logo = () => {
	const navigate = useNavigate();
	return (
		<svg onClick={() => navigate("/")} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="196" height="75" viewBox="0 0 196 75" fill="none">
			<g filter="url(#filter0_d_7_256)">
				<path d="M78.0586 68.2717V40.2717H97.6586V51.4717H94.8586V54.2717H97.6586V68.2717H78.0586ZM89.2586 51.4717V45.8717H86.4586V51.4717H89.2586ZM86.4586 57.0717V62.6717H89.2586V57.0717H86.4586ZM101.652 68.2717V40.2717H121.252V68.2717H112.852V57.0717H110.052V68.2717H101.652ZM112.852 51.4717V45.8717H110.052V51.4717H112.852ZM125.246 68.2717V54.2717H130.846V51.4717H136.446V45.8717H125.246V40.2717H144.846V54.2717H139.246V57.0717H133.646V62.6717H144.846V68.2717H125.246ZM148.84 68.2717V40.2717H168.44V68.2717H160.04V57.0717H157.24V68.2717H148.84ZM160.04 51.4717V45.8717H157.24V51.4717H160.04ZM172.434 68.2717V40.2717H192.034V51.4717H189.234V54.2717H192.034V68.2717H183.634V57.0717H180.834V68.2717H172.434ZM183.634 51.4717V45.8717H180.834V51.4717H183.634Z" fill="black"/>
			</g>
			<g filter="url(#filter1_d_7_256)">
				<path fillRule="evenodd" clipRule="evenodd" d="M101.046 0H57.8047V68.6H78.3847V41.16H101.046V0ZM0 0V41.16H27.44V54.88H0V68.6H48.02V27.44H20.58V13.72H48.02V0H0ZM85.2447 13.72V27.44H78.3847V13.72H85.2447Z" fill="white"/>
			</g>
			<defs>
				<filter id="filter0_d_7_256" x="78.0586" y="40.2717" width="113.975" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
					<feOffset dy="4"/>
					<feComposite in2="hardAlpha" operator="out"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_256"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_256" result="shape"/>
				</filter>
				<filter id="filter1_d_7_256" x="0" y="0" width="101.046" height="72.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
					<feOffset dy="4"/>
					<feComposite in2="hardAlpha" operator="out"/>
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_256"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_256" result="shape"/>
				</filter>
			</defs>
		</svg>
	);
};

export default Logo;