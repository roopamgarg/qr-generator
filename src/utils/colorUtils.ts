export function rgbaToHex(rgbaColor: string): string {
    // Remove "rgba(" and ")" and split the RGBA color components
    const components = rgbaColor.replace('rgba(', '').replace(')', '').split(',');
  
    // Extract the red, green, blue, and alpha values
    const red = parseInt(components[0]);
    const green = parseInt(components[1]);
    const blue = parseInt(components[2]);
    const alpha = Math.round(parseFloat(components[3]) * 255); // Convert alpha to [0, 255] range
  
    // Convert the values to their hexadecimal representation
    const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}${alpha.toString(16).padStart(2, '0')}`;
  
    return hexColor;
  }