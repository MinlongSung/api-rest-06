import dotenv from 'dotenv';
import jsonServer from 'json-server';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../dev.env') });

const server = jsonServer.create();
const router = jsonServer.router('mock-data/db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT ?? 3000;

server.use(middlewares);
server.use(bodyParser.json());

const itemsPerPage = 20;
server.get('/character', (req, res) => {
  const page = req.query?.page || 1;
  const name = req.query?.name || '';
  const firstPageIndex = (page - 1) * itemsPerPage;
  const lastPageIndex = firstPageIndex + itemsPerPage;

  let db = router.db;
  let sendCharacters = db.get('character').value();
  if (name) {
    let filtered = sendCharacters.filter(character => character.name.toLowerCase().includes(name.toLocaleLowerCase()))
    sendCharacters = filtered;
  }

  const baseUrl = `${process.env.API_URL}/character`;
  const totalPages = Math.ceil(sendCharacters.length / itemsPerPage);
  res.jsonp({
    info: {
      count: sendCharacters.length,
      pages: totalPages,
      next: page == totalPages ? null : `${baseUrl}/page?=${parseInt(page) + 1}`,
      prev: page == 1 ? null : `${baseUrl}/page?=${parseInt(page) + 1}`,
    },
    results: sendCharacters.slice(firstPageIndex, lastPageIndex)
  });
});

server.get('/character/:id', (req, res) => {
  const { id } = req.params;
  const db = router.db;
  const characters = db.get('character').value();
  const character = characters.find(char => char.id == id);
  if (character) {
    res.jsonp(character);
  } else {
    res.status(404).json({ message: 'Character not found' });
  }
});

server.patch('/character/:id', (req, res) => {
  const { id } = req.params;
  const db = router.db;
  const character = db.get('character').find({ id: parseInt(id) });

  if (character.value()) {
    character.assign(req.body).write();
    res.json(character);
  } else {
    res.status(404).json({ message: 'Character not found' });
  }
});

server.use(router);

server.listen(PORT, () => {
  console.log(`Json server is running on ${process.env.API_URL}`);
});

