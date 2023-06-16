import React from 'react';
import { Layout } from '../components';
import { useQuery, gql} from '@apollo/client';
import TrackCard from '../containers/track-card';

const TRACKS = gql`
  query ExampleQuery {
    trackForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {loading, error, data} = useQuery(TRACKS);

  if (loading){
    return 'Loading...';
  }

  if (error){
    return `ERROR! ${error.message}`;
  }

  console.log(data);
  return (
    <Layout grid>
      {data?.trackForHome?.map( (track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>);
};

export default Tracks;
