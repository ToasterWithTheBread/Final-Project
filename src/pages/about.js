export default function About() {
	return (
		<main>
			{/* Navbar */}
			<div className="mt-5 mx-10">
				<div className="navbar bg-base-200 rounded-full">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h7"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
							>
								<li>
									<a href="/">Homepage</a>
								</li>
								<li>
									<a href="/about">About</a>
								</li>
								<li>
									<a href="/contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="navbar-center">
						<a className="btn btn-ghost text-xl" href="/">
							Coopers Chihuahuas
						</a>
					</div>
					<div className="navbar-end">
						<label className="swap swap-rotate mr-2">
							{/* This hidden checkbox controls the state */}
							<input
								type="checkbox"
								className="theme-controller"
								value="synthwave"
							/>

							{/* Sun icon */}
							<svg
								className="swap-off fill-current w-7 h-7"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
							</svg>

							{/* Moon icon */}
							<svg
								className="swap-on fill-current w-7 h-7"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
							</svg>
						</label>
					</div>
				</div>
			</div>

			{/* Info */}
			<div className="mt-36 mb-72 ml-20">
				<p className="text-4xl font-bold">About us</p>
				<div className="ml-5 pr-20 mt-5">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio
						pellentesque diam volutpat commodo sed egestas egestas fringilla.
						Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.
						Et malesuada fames ac turpis egestas maecenas pharetra. Lorem mollis
						aliquam ut porttitor leo a diam. Mi tempus imperdiet nulla malesuada
						pellentesque elit. Proin fermentum leo vel orci porta non pulvinar.
						Faucibus et molestie ac feugiat sed lectus vestibulum mattis
						ullamcorper. Turpis cursus in hac habitasse platea. Id faucibus nisl
						tincidunt eget. Euismod nisi porta lorem mollis aliquam ut porttitor
						leo a. Ac odio tempor orci dapibus. Ornare aenean euismod elementum
						nisi quis eleifend. Cras pulvinar mattis nunc sed blandit. Purus sit
						amet luctus venenatis lectus magna fringilla urna porttitor. Nec
						ullamcorper sit amet risus nullam eget felis.
					</p>
				</div>
			</div>

			{/* Footer */}
			<footer className="footer footer-center p-10 bg-primary text-primary-content mt-20">
				<aside>
					<img src="/CC.png" alt="Coopers Chihuahuas" className="h-12 w-12" />
					<p className="font-bold">
						Coopers Chihuahuas Ltd. <br />
						Providing reliable dog grooming services since 2005.
					</p>
					<p>Copyright © 2024 - All right reserved</p>
				</aside>
			</footer>
		</main>
	);
}
