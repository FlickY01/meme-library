import { Meme } from '../types/meme';

const getRandomLikes = (): number => Math.floor(Math.random() * 99);

export const initialMemes: Meme[] = [
  {
    id: 1,
    title: "Дрейк одобряет/не одобряет",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/020/147/drake.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/drakeposting"
  },
  {
    id: 2,
    title: "Парень, оглядывающийся на другую девушку",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/023/732/damngina.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/distracted-boyfriend"
  },
  {
    id: 3,
    title: "Гарольд, скрывающий боль",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/016/546/hidethepainharold.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/hide-the-pain-harold"
  },
  {
    id: 4,
    title: "Всё в порядке (This is fine)",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/this-is-fine"
  },
  {
    id: 5,
    title: "Женщина кричит на кота",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/030/157/womanyellingcat.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/woman-yelling-at-a-cat"
  },
  {
    id: 6,
    title: "Успешный ребенок",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/000/745/success.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/success-kid-i-hate-sandcastles"
  },
  {
    id: 7,
    title: "Злой советчик (Утка советчик)",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/006/701/advice.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/advice-animals"
  },
  {
    id: 8,
    title: "Грустный Киану Ривз",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/002/862/SadKeanu.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/sad-keanu"
  },
  {
    id: 9,
    title: "Это голубь?",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/017/299/DmbzJspWwAEprcQ.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/is-this-a-pigeon"
  },
  {
    id: 10,
    title: "Две кнопки",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/019/571/dailystruggg.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/daily-struggle-two-buttons"
  },
  {
    id: 11,
    title: "Мем с Питером Паркером в очках",
    imageUrl: "https://i.kym-cdn.com/entries/icons/square/000/022/502/prkersglasses.JPG",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/peter-parkers-glasses"
  },
  {
    id: 12,
    title: "Shut Up And Take My Money",
    imageUrl: "https://i.kym-cdn.com/entries/icons/mobile/000/005/574/takemymoney.jpg",
    likes: getRandomLikes(),
    link: "https://knowyourmeme.com/memes/shut-up-and-take-my-money"
  }
];