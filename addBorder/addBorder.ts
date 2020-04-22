function addBorder(picture: string[]): string[] {
  const finalPic = [];
  let length = 0;

  picture.forEach((pic) => {
    if (length < pic.length) length = pic.length;
    finalPic.push('*'.concat(pic.concat('*')));
  });

  let topBottom = '*'.repeat(length+2);

  finalPic.push(topBottom);
  finalPic.unshift(topBottom);

  return finalPic;
}

console.log(addBorder(['abc', 'ded']));
