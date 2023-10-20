function parseSrt(srt) {
  const lines = srt.trim().split('\n\n');
  return lines.map(line => {
    const [time, ...textLines] = line.split('\n');
    const [start, end] = time.split(' --> ').map(t => new Date(`1970-01-01T${t}Z`).getTime());
    const text = textLines.join(' ');
    return { start, end, text };
  });
}
