// Shared album data for the temple website
// This file contains the event data used by both album.html and index.html

const templeEventData = [
    {
        id: '1',
        name: 'Test Public Album · Saturday, Jul 12 📸',
        date: new Date('2024-07-12'),
        googlePhotosLink: 'https://photos.app.goo.gl/TwvA1JPEced9HuFL6',
        coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczPW7HPR_hcXLch5tblSdQkKfHzNlm7ilFUm4h-7nfqnmZOn0459ltsBCkT5Q4RgMCWph3waSaxc-_FWyyiLBfmNJBAHHQC_RDGJk5aByXDsbDJIGM0=w400-h300-p'
    },
    {
        id: '2',
        name: '观音诞千人斋宴',
        date: new Date('2024-12-15'),
        googlePhotosLink: '', // Add Google Photos share link here
        coverImage: '' // Add cover image URL here
    },
    {
        id: '3',
        name: '中秋节庆祝活动',
        date: new Date('2024-09-17'),
        googlePhotosLink: '',
        coverImage: ''
    },
    {
        id: '4',
        name: '儿童佛学营',
        date: new Date('2024-06-15'),
        googlePhotosLink: '',
        coverImage: ''
    }
];

// Get processed events with cover images
function getProcessedEvents() {
    return templeEventData
        .filter(event => event.googlePhotosLink && event.googlePhotosLink.trim() !== '')
        .map(event => ({
            ...event,
            coverImage: event.coverImage || 'images/temple-building.jpg'
        }))
        .sort((a, b) => b.date - a.date);
}