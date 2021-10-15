# Senirupa MQ 📐

Senirupa MQ is Media Query Responsive for CSS in JS

-   Easy to use
-   Customizable
-   Lightweight

## Install

To install Senirupa MQ

```bash
  npm i senirupa-mq --save
```

## Usage

Have tested the Next.js project with the @emotion/css

```javascript
import { css } from '@emotion/css';
import mediaQuery from 'senirupa-mq';

const mq = mediaQuery();

function App() {
	return (
		<div className={wrapTitle}>
			<h2>Senirupa</h2>
		</div>
	);
}

const wrapTitle = css`
	padding: 30px 20px;

	h2 {
		margin: 0px;
		text-align: center;
		font-size: 54px;
		font-weight: 700;

		${mq[1]} {
			font-size: 26px;
		}
	}
`;
```

## Screen Size

-   mq[0] = Mobile devices
-   mq[1] = iPads, Tablets
-   mq[2] = Small screens, laptops
-   mq[3] = Desktops, large screens
-   mq[4] = Extra large screens, TV

## Customization

Information to change the max-width and min-width. Default is max-width

`mediaQuery('min')`

`mediaQuery('max')`

## Authors

-   [@firmnardians](https://github.com/firmnardians)

## License

[MIT](https://choosealicense.com/licenses/mit/)
