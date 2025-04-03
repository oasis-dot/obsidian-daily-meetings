function meetings(fileName) {
    const today = new Date(fileName);
    let meetings = [];
    const dayOfWeek = today.getDay(); // Sunday = 0, Monday = 1, etc.

    // Meeting with colleagues (10:00) - Tuesday to Thursday
    if (dayOfWeek >= 2 && dayOfWeek <= 4) {
        meetings.push({
            time: "10:00",
            text: "- [ ] 10:00 [Meeting with colleagues](https://yourlink.com)"
        });
    }

    // Meeting with PM (15:00) - Monday and Friday
    else if (dayOfWeek === 1 || dayOfWeek === 5) {
        meetings.push({
            time: "15:00",
            text: "- [ ] 15:00 [Meeting with PM](https://yourlink.com)"
        });
    }

    // Sort by time
    meetings.sort((a, b) => a.time.localeCompare(b.time));

    // Output
    return meetings.map(meeting => meeting.text).join('\n');
}

module.exports = meetings;
