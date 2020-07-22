import Api from '../../services/Api';

class PunkApiController {
  async index(req, res) {
    const { page = 1, per_page = 9 } = req.query;

    try {
      const { data: beers } = await Api.get(
        `/beers?page=${page}&per_page=${per_page}`,
      );

      return res.status(200).json(beers);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'System internal error - ' + error });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const beer = await Api.get(`/beers/${id}`);

      return res.status(200).json(beer.data[0]);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'System internal error - ' + error });
    }
  }
}

export default new PunkApiController();
