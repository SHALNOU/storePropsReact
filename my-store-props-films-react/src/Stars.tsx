import React from "react";
import StarProp from "./Star";

interface starsCount {
	count: number
}


const stars = (count: starsCount) => {

	const { count: countStars } = count

	if (isNaN(countStars) || countStars < 1 || countStars > 5) {
		return null
	}

	let arrayCount = []

	for (let i = 1; i <= 5; i++) {
		arrayCount.push(<StarProp fillimg={i <= countStars ? '#D3BCA2' : 'none'} />)
	}


	return (
		<ul className="card-body-stars u-clearfix">
			{arrayCount}
		</ul>
	)
}

export default stars