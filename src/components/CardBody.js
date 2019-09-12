import React from 'react';

class CardBody extends React.Component{
	render(){
		return (
			<div className='cardBody'>
				<div className='body'>
				  <div className="bodylogo">DEV</div>
				  <div className='bodyContent'>
						Learning React? Start Small.
						</div>
						<div className="person">
							<p>Senthil kannan
							<div className='img'></div></p>
						</div>
				</div>
				<div className='msg'>
					<p><b>Learning React? Start Small.</b></p>
					<p className='pera'>can't pry yourself away from the tutoeials? The cure is to make tiny little experiment apps.</p>
					<p className='dev'>dev.to</p>
				</div>
			</div>
		);
	}
}

export default CardBody;