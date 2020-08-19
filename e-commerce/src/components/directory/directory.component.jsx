import React, { useState, useEffect } from 'react';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
	return (
		<div>
			{console.log("Sections:", sections)}
            {(sections.map(section => (
                (console.log("Section", section)),
			    <MenuItem props={section}/>
            )))}
		</div>
	);
};

export default Directory;
