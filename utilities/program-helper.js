export function getProgramByprogrammestypes(programs, programmestype) {
  if (programs.length > 0) {
      const result = programs.find(item => item.programmestypes.includes(programmestype));
      if (result !== undefined) {
          return result;
      } else {
          return [];
      }
  } else {
      return [];
  }
}