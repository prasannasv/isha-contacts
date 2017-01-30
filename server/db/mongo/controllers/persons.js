import _ from 'lodash';
import Person from '../models/persons';

/**
 * List
 */
export function all(req, res) {
  Person.find({}).exec((err, persons) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(persons);
  });
}

/**
 * Add a Person
 */
export function add(req, res) {
  Person.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

/**
 * Update a Person
 */
export function update(req, res) {
  const query = { id: req.params.id };
  const isIncrement = req.body.isIncrement;
  const isFull = req.body.isFull;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  const data = _.omit(req.body, omitKeys);

  if (isFull) {
    Person.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  } else {
    console.log('Unexpected state while updating person');
    return res.status(500).send('We failed to save as we do not support non-full updates');
  }
}

/**
 * Remove a Person
 */
export function remove(req, res) {
  const query = { id: req.params.id };
  Person.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}

export default {
  all,
  add,
  update,
  remove
};
