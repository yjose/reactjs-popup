/* Algo to calculate position
  1. center position for popup content : the center of the trigger will be the center of the content content
      so the popup content position will be like this :
      top => the y of the center for the trigger element : trigger.top + trigger.height/2
      left => the x of the center for the trigger element : trigger.left + trigger.width/2

  2. translate position according to the first  position attribute  passed  in the function argument
      for example :
        position = 'left top'
        we need to handle the first argument in the position: 'left' => that's mean we need to translate the popup content according to the X axis by - content.width/2

  3.translate position according to the first  position attribute  passed  in the function argument
    for example :
      position = 'left top'
      the second argument 'top' => translate popup content by + content.height*4/5

  4. check if calculated position is going out of bounds of wrapper box or not. If yes repeat 1-3 for next position enum. By default wrapper box is window element
*/
import { PopupPosition } from './types';

export const POSITION_TYPES: PopupPosition[] = [
  'top left',
  'top center',
  'top right',
  'right top',
  'right center',
  'right bottom',
  'bottom left',
  'bottom center',
  'bottom right',
  'left top',
  'left center',
  'left bottom',
  //'center center',
];

type CordsType = {
  top: number;
  left: number;
  transform: string;
  arrowLeft: string;
  arrowTop: string;
};

const getCoordinatesForPosition = (
  triggerBounding: DOMRect,
  ContentBounding: DOMRect,
  position: PopupPosition, //PopupPosition | PopupPosition[],
  arrow: boolean,
  { offsetX, offsetY }: { offsetX: number; offsetY: number }
): CordsType => {
  const margin = arrow ? 8 : 0;
  const args = position.split(' ');
  // the step N 1 : center the popup content => ok
  const CenterTop = triggerBounding.top + triggerBounding.height / 2;
  const CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  const { height, width } = ContentBounding;
  let top = CenterTop - height / 2;
  let left = CenterLeft - width / 2;
  let transform = '';
  let arrowTop = '0%';
  let arrowLeft = '0%';
  // the  step N 2 : => ok
  switch (args[0]) {
    case 'top':
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = `rotate(180deg)  translateX(50%)`;
      arrowTop = '100%';
      arrowLeft = '50%';
      break;
    case 'bottom':
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = `rotate(0deg) translateY(-100%) translateX(-50%)`;
      arrowLeft = '50%';
      break;
    case 'left':
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = ` rotate(90deg)  translateY(50%) translateX(-25%)`;
      arrowLeft = '100%';
      arrowTop = '50%';
      break;
    case 'right':
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = `rotate(-90deg)  translateY(-150%) translateX(25%)`;
      arrowTop = '50%';
      break;
    default:
  }
  switch (args[1]) {
    case 'top':
      top = triggerBounding.top;
      arrowTop = `${triggerBounding.height / 2}px`;
      break;
    case 'bottom':
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = `${height - triggerBounding.height / 2}px`;
      break;
    case 'left':
      left = triggerBounding.left;
      arrowLeft = `${triggerBounding.width / 2}px`;
      break;
    case 'right':
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = `${width - triggerBounding.width / 2}px`;
      break;
    default:
  }

  top = args[0] === 'top' ? top - offsetY : top + offsetY;
  left = args[0] === 'left' ? left - offsetX : left + offsetX;

  return { top, left, transform, arrowLeft, arrowTop };
};

export const getTooltipBoundary = (keepTooltipInside: string | Boolean) => {
  // add viewport
  let boundingBox = {
    top: 0,
    left: 0,
    /* eslint-disable-next-line no-undef */
    width: window.innerWidth,
    /* eslint-disable-next-line no-undef */
    height: window.innerHeight,
  };
  if (typeof keepTooltipInside === 'string') {
    /* eslint-disable-next-line no-undef */
    const selector = document.querySelector(keepTooltipInside);
    if (process.env.NODE_ENV !== 'production') {
      if (selector === null)
        throw new Error(
          `${keepTooltipInside} selector does not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value`
        );
    }
    if (selector !== null) boundingBox = selector.getBoundingClientRect();
  }

  return boundingBox;
};

const calculatePosition = (
  triggerBounding: DOMRect,
  ContentBounding: DOMRect,
  position: PopupPosition | PopupPosition[],
  arrow: boolean,
  { offsetX, offsetY }: { offsetX: number; offsetY: number },
  keepTooltipInside: string | boolean
): CordsType => {
  let bestCoords: CordsType = {
    arrowLeft: '0%',
    arrowTop: '0%',
    left: 0,
    top: 0,
    transform: 'rotate(135deg)',
  };
  let i = 0;
  const wrapperBox = getTooltipBoundary(keepTooltipInside);
  let positions = Array.isArray(position) ? position : [position];

  // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array
  if (keepTooltipInside || Array.isArray(position))
    positions = [...positions, ...POSITION_TYPES];

  // add viewPort for WarpperBox
  // wrapperBox.top = wrapperBox.top + window.scrollY;
  // wrapperBox.left = wrapperBox.left + window.scrollX;

  while (i < positions.length) {
    bestCoords = getCoordinatesForPosition(
      triggerBounding,
      ContentBounding,
      positions[i],
      arrow,
      { offsetX, offsetY }
    );

    const contentBox = {
      top: bestCoords.top,
      left: bestCoords.left,
      width: ContentBounding.width,
      height: ContentBounding.height,
    };

    if (
      contentBox.top <= wrapperBox.top ||
      contentBox.left <= wrapperBox.left ||
      contentBox.top + contentBox.height >=
        wrapperBox.top + wrapperBox.height ||
      contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width
    ) {
      i++;
    } else {
      break;
    }
  }

  return bestCoords;
};

export default calculatePosition;
