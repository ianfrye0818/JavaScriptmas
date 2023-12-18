import { OpenAI } from 'openai';
const form = document.querySelector('form');
const modalCloseButton = document.getElementById('modal-close');
const spinner = document.getElementById('spinner');

const apikey = process.env.OPEN_API_KEY;

const openai = new OpenAI({ apiKey: apikey, dangerouslyAllowBrowser: true });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getPhoto();
});

const dialogModal = document.getElementById('dialog-modal');
const imageContainer = document.getElementById('image-container');

/** show dialog on load **/
dialogModal.show();
async function getPhoto() {
  const userInput = document.getElementById('user-input');
  dialogModal.classList.add('hidden');
  imageContainer.innerHTML = `<img src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif">`;
  const response = await openai.images.generate({
    prompt: userInput.value,
    size: '256x256',
  });

  userInput.value = '';

  generateAltText(response.data[0].url);
}

async function generateAltText(imageUrl) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'What’s in this image?' },
          {
            type: 'image_url',
            image_url: {
              url: imageUrl,
            },
          },
        ],
      },
    ],
  });

  const altText = response.choices[0].message.content;
  renderImage(imageUrl, altText);
}

function renderImage(imageUrl, altText) {
  console.log(altText);
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = '';
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = altText;
  imageContainer.appendChild(image);
}

imageContainer.addEventListener('click', () => {
  dialogModal.classList.remove('hidden');
});
modalCloseButton.addEventListener('click', () => {
  dialogModal.classList.add('hidden');
});
