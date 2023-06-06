import React from 'react';
import { deleteExhibitById } from '../../../../database/exhibits';

export default async function ExhibitDeletePage({ props }) {
  const exhibit = await deleteExhibitById(Number(props.params.exhibitId));
  return <div>Exhibit with id {exhibit.id} has been deleted.</div>;
}
