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

*/

export default function calculatePosition(
  triggerBounding,
  ContentBounding,
  position
) {
  const style = {};
  const margin = 5;
  const args = position.split(",");
  // the 1 step : center the popup content => ok
  const CenterTop = triggerBounding.top + triggerBounding.height / 2;
  const CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  const { height, width } = ContentBounding;
  let top = CenterTop - height / 2;
  let left = CenterLeft - width / 2;
  let transform = "";
  let arrowTop = "0%";
  let arrowLeft = "0%";
  // the 2 step : => ok
  switch (args[0]) {
    case "top":
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = `translateX(-50%) rotate(45deg)`;
      arrowTop = "100%";
      arrowLeft = "50%";
      break;
    case "bottom":
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = `translateX(-50%) rotate(225deg)`;
      arrowLeft = "50%";
      break;
    case "left":
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = ` translateY(-50%) rotate(-45deg)`;
      arrowLeft = "100%";
      arrowTop = "50%";
      break;
    case "right":
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = `translateY(-50%) rotate(135deg)`;
      arrowTop = "50%";

      break;
  }
  switch (args[1]) {
    case "top":
      top += height / 4;
      arrowTop = "25%";
      break;
    case "bottom":
      top -= height / 4;
      arrowTop = "75%";
      break;
    case "left":
      left += width / 4;
      arrowLeft = "25%";
      break;
    case "right":
      left -= width / 4;
      arrowLeft = "75%";
      break;
  }

  return { top, left, transform, arrowLeft, arrowTop };
}
