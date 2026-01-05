// UPDATE script.js RELEASE_SCHEDULE array
// Valentine's Day inserts after McDonald's
// Release: Friday Feb 13, 2026 at 11:59 PM CT

// ADD THIS ENTRY to your RELEASE_SCHEDULE array:
{ topic: 'valentines-day', date: '2026-02-13T23:59:00-06:00', title: "Valentine's Day" },

// Insert wherever Feb 13, 2026 falls in your sequence
// Then push remaining topics back one week

// BOARD_QUESTIONS update (add to board.html or board config):
const VALENTINES_BOARD_QUESTION = {
    topic: 'valentines-day',
    releaseDate: '2026-02-13T23:59:00-06:00',
    question: "What ritual or tradition—romantic or otherwise—do you participate in even though you're not sure why?",
    topicTitle: "Valentine's Day",
    topicUrl: '/topics/valentines-day.html'
};
