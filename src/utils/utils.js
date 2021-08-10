export function convertDurationToTimeString(duration) {
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60

  const timeString = [minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')
    
  return timeString;
}

export function calculateTotalDuration(TracksArray) {
  const durations = []
  TracksArray.map(track => {
    durations.push(Number(track.duration))
  })

  const totalDuration = durations.reduce((totalValue, currentValue) => totalValue + currentValue)

  const minutes = Math.floor((totalDuration % 3600) / 60)
  const seconds = totalDuration % 60
    
  return `${minutes}:${seconds} min`;
}