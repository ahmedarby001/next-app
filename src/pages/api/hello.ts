import { NextApiRequest, NextApiResponse } from 'next';


export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({
    name: 'Ahmed Arby',
    username: 'ahmedarby231@',
    password: '01282882832',
    photo: 'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg',
    followers: 1550,
    following: 46
  })
}
