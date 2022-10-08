import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
	const friend = useLoaderData();
	return (
		<div>
			<h1>Name : {friend.name}</h1>
			<p>Cell Number : {friend.phone}</p>
			<p>Website : {friend.website}</p>
		</div>
	);
};

export default FriendDetails;