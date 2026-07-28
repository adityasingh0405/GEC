import { test, expect } from '@playwright/test';

const pages = [
    { path: '/', title: /Glory|GEC/i },
    { path: '/about', title: /About|Glory/i },
    { path: '/academics', title: /Academics|Glory/i },
    { path: '/admissions', title: /Admissions|Glory/i },
    { path: '/faculty', title: /Faculty|Glory/i },
    { path: '/gallery', title: /Gallery|Glory/i },
    { path: '/student-life', title: /Student|Glory/i },
    { path: '/news', title: /News|Glory/i },
    { path: '/contact', title: /Contact|Glory/i },
    { path: '/donation', title: /Donation|Glory/i },
];

for (const p of pages) {
    test(`Visit ${p.path}`, async ({ page }) => {
        const consoleErrors = [];
        const failedRequests = [];

        page.on('console', msg => {
            if (msg.type() === 'error')
                consoleErrors.push(msg.text());
        });

        page.on('response', response => {
            if (response.status() >= 400)
                failedRequests.push(`${response.status()} : ${response.url()}`);
        });

        await page.goto(p.path);

        await expect(page).toHaveTitle(p.title);

        expect(consoleErrors).toEqual([]);
        expect(failedRequests).toEqual([]);
    });
}