import { pool } from "./../db.js";

export const getPlayers = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM players')
  res.json(rows)
}

export const getPlayer = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM players WHERE id=?', [req.params.id])
  res.json(rows[0])
}

export const createPlayer = async (req, res) => {
  const { name, nationality, position, image } = req.body
  const [rows] = await pool.query('INSERT INTO players (name,nationality,position,image) VALUES (?,?,?,?)', [name, nationality, position, image]);
  res.send({
    id: rows.insertId,
    name,
    nationality,
    position,
    image
  })
}

export const updatePlayer = async (req, res) => {
  const { id } = req.params
  const { name, nationality, position, image } = req.body

  await pool.query('UPDATE players SET name = IFNULL(?,name),nationality = IFNULL(?,nationality),position = IFNULL(?,position),image = IFNULL(?,image) WHERE id=?', [name, nationality, position, image, id])

  res.send('updated succesfully')
}

export const deletePlayer = async (req, res) => {
  const { id } = req.params

  pool.query('DELETE FROM players WHERE id=?', [id])

  res.send('deleted succesfully')
}