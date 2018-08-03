import React from 'react';

import {
	Entities,
} from '../../../shared/models';

import {
	Segment,
	Image,
} from 'semantic-ui-react';

interface ComponentProps {
	id: string;
	entities: Entities;
}

export class MediaComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			id,
			entities,
		} = this.props;

		if(entities === undefined) {
			return null;
		}

		if(entities.media === undefined) {
			return null;
		}

		return (
			<Segment>
				<Image.Group
					size="small"
					style={{
						'display': 'flex',
						'justifyContent': 'space-between',
						'alignItems': 'center',
						'flexWrap': 'wrap',
					}}
				>
				{entities.media.map((medium) => {
					switch(medium.type) {
					case 'video':
						return (
							<iframe
								key={medium.id_str}
								style={{
									'margin': '0 auto',
								}}
								src={`https://twitter.com/i/videos/${id}`}
							/>
						);
					case 'photo':
					default:
						return (
							<Image
								key={medium.id_str}
								style={{
									'margin': '0 auto',
								}}
								src={medium.media_url_https}
								rounded={true}
							/>
						);
					}
				})}
				</Image.Group>
			</Segment>
		);
	}
}
