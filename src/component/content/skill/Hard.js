import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {
	SiHtml5,
	SiJavascript,
	SiReact,
	SiJava,
	SiSpring,
	SiRedux,
	SiGithub,
} from 'react-icons/si';

const HardBlock = styled.div`
	display: none;
	&.show {
		display: block;
	}
`;

const Table = styled.table`
	border: 1px solid black;
	border-collapse: collapse;

	th,
	td {
		padding: 10px 20px;
		border: 1px solid black;
	}

	svg {
		margin-right: 5px;
	}
`;

const Item = styled.div`
	display: flex;
	align-items: center;
`;

const Hard = ({ show }) => {
	return (
		<HardBlock className={cn({ show })}>
			<Table>
				<thead>
					<tr>
						<th colSpan="3">Hard Skills</th>
					</tr>
					<tr>
						<th>Front-End</th>
						<th>Back-End</th>
						<th>etc</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Item>
								<SiHtml5 />
								HTML / CSS
							</Item>
						</td>
						<td>
							<Item>
								<SiJava />
								Java
							</Item>
						</td>
						<td>
							<Item>
								<SiGithub />
								Git
							</Item>
						</td>
					</tr>
					<tr>
						<td>
							<Item>
								<SiJavascript />
								JavaScript
							</Item>
						</td>
						<td>
							<Item>
								<SiSpring />
								Spring
							</Item>
						</td>
						<td>
							<Item>
								<SiRedux />
								Redux / Redux-Saga
							</Item>
						</td>
					</tr>
					<tr>
						<td>
							<Item>
								<SiReact />
								React
							</Item>
						</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</Table>
		</HardBlock>
	);
};

export default Hard;
