export default function Navbar() {
    return `
        <div id="navbar">
			<div id="logo">
				<img src="/resources/images/logos/aeonix_exclusive.png" id="logo_img">
			</div>
			<input type="checkbox" id="menu_toggle" class="menu_toggle">
			<label for="menu_toggle" class="hamburger">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</label>
			<ul id="bar_as_list">
				<li class="nav_bar_item">
					<a class="nav_bar_item_link" href="/">
						Home
					</a>
				</li>
				<li class="nav_bar_item">
					<div class="drop_down">
						<a class="nav_bar_item_link drop_down_link" href="/solutions">
							Solutions
							<i class="fa fa-caret-down"></i>
						</a>
						<div class="drop_down_wrapper">
							<a class="drop_down_content">
								Lorem Ipsum
							</a>
							<a class="drop_down_content">
								Lorem Ipsum
							</a>
						</div>
					</div>
				</li>
				<li class="nav_bar_item">
					<div class="drop_down">
						<a class="nav_bar_item_link drop_down_link" href="/solutions">
							Development
							<i class="fa fa-caret-down"></i>
						</a>
						<div class="drop_down_wrapper">
							<a class="drop_down_content">
								Lorem Ipsum
							</a>
						</div>
					</div>
				</li>
				<li class="nav_bar_item">
					<a class="nav_bar_item_link" href="/about">
						About Us
					</a>
				</li>
				<li class="nav_bar_item">
				   <a class="nav_bar_item_link" href="/">
						News
					</a>
				</li>
				<li class="nav_bar_item">
				   <a class="nav_bar_item_link" href="/">
						Contact
					</a>
				</li>
			</ul>
		</div>
    `
}