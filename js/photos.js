const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

const photoChooser = document.querySelector('.ad-form__upload input[type=file]');
const previewPhotos = document.querySelector('.ad-form__photo');
const createImg = document.createElement('img');

photoChooser.addEventListener('change', () => {
  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    createImg.src = URL.createObjectURL(file);
    createImg.style.width = '70px';
    createImg.style.height = '70px';
    previewPhotos.append(createImg);
  }
});
