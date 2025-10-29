/**
 * Formats a date string to match the Figma design format
 * Example: "2023-10-15T10:30:00Z" -> "October 15, 2023"
 */
export const formatPublicationDate = (dateString) => {
  if (!dateString) return "";
  
  const date = new Date(dateString);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) return "";
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
};

/**
 * Formats a date for API requests (YYYY-MM-DD format)
 */
export const formatApiDate = (date) => {
  return date.toISOString().split('T')[0];
};
