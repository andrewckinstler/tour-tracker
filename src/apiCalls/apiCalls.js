export const getArtist = async () => {
  const url = 'https://rest.bandsintown.com/artists/thomyorke?app_id=da8532625866baed0e4894e4738af8be';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error finding that artist');
  }
  const artist = await response.json();
  return artist;
}

export const getEvents = async artist => {
  const url = `https://rest.bandsintown.com/artists/${artist.name}/events?app_id=da8532625866baed0e4894e4738af8be&date=upcoming`;
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('There was an error getting upcoming events');
  };

  const events = await response.json();
  return events;
}