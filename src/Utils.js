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

function getCoordinatesForPosition(
  triggerBounding,
  ContentBounding,
  position,
  arrow,
  { offsetX, offsetY }
) {
  const style = {};
  const margin = arrow ? 8 : 0;
  const args = position.split(" ");
  // the step N 1 : center the popup content => ok
  const CenterTop = triggerBounding.top + triggerBounding.height / 2;
  const CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  const { height, width } = ContentBounding;
  let top = CenterTop - height / 2;
  let left = CenterLeft - width / 2;
  let transform = "";
  let arrowTop = "0%";
  let arrowLeft = "0%";
  // the  step N 2 : => ok
  switch (args[0]) {
    case "top":
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = `rotate(45deg)`;
      arrowTop = "100%";
      arrowLeft = "50%";
      break;
    case "bottom":
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = `rotate(225deg)`;
      arrowLeft = "50%";
      break;
    case "left":
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = ` rotate(-45deg)`;
      arrowLeft = "100%";
      arrowTop = "50%";
      break;
    case "right":
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = `rotate(135deg)`;
      arrowTop = "50%";

      break;
  }
  switch (args[1]) {
    case "top":
      top = triggerBounding.top;
      arrowTop = triggerBounding.height / 2 + "px";
      break;
    case "bottom":
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = height - triggerBounding.height / 2 + "px";
      break;
    case "left":
      left = triggerBounding.left;
      arrowLeft = triggerBounding.width / 2 + "px";
      break;
    case "right":
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = width - triggerBounding.width / 2 + "px";
      break;
  }

  top = args[0] === "top" ? top - offsetY : top + offsetY;
  left = args[0] === "left" ? left - offsetX : left + offsetX;

  return { top, left, transform, arrowLeft, arrowTop };
}

export default function calculatePosition(
  triggerBounding,
  ContentBounding,
  positions,
  arrow,
  { offsetX, offsetY },
  wrapperBox
) {
  let bestCoords;
  let i = 0;
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
      height: ContentBounding.height
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
}
