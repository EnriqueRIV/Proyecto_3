import './Card.css';

export const standardCard = (photo) => {
  const divCard = document.createElement('div');
  const divData = document.createElement('div');
  const image = document.createElement('img');
  const imageProfile = document.createElement('img');
  const h1 = document.createElement('h1');

  image.src = photo.urls.small;
  h1.textContent = photo.user.name;
  imageProfile.src = photo.user.profile_image.small;
  divCard.className = 'eri_card';
  divData.className = 'eri_cardData';
  divCard.append(image);
  divData.append(imageProfile);
  divData.append(h1.textContent);
  divCard.append(divData);
  return divCard;
};
