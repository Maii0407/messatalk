export const returnRandomSeed = () => {
  //list of avatar seeds
  const avatarArray = [ 'Felix', 'Aneka', 'Callie', 'Abby', 'Zoe', 'Midnight', 'Spooky', 'Willow', 'Smokey', 'Molly', 
'Sadie', 'Sam', 'Sassy', 'Sammy', 'Princess', 'Simon', 'Peanut', 'Samantha', 'Scooter', 'Oscar', 'Tiger', 'Rocky' ];

//returns random avatar seed from array
  return avatarArray[ Math.floor( Math.random() * avatarArray.length ) ];
};