const STRING_SIMILARITY_THRESHOLD = 2;

function levenshteinDistance(a: string, b: string): number {
    const matrix: number[][] = [];

    for (let i = 0; i <= a.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 1; j <= b.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[a.length][b.length];
}

/*
* Product name matching
* Excludes strings with digits as they are not considered similar apple_1 !== apple_2
* Should match aple to apple
*/
export function findMostSimilarString(
    input: string,
    options: string[]
): string | null {
    /*
     * If the input contains a number we dont want to match to a different number
     */
    if (/\d/.test(input)) {
        return null;
    }

    if (options.length === 0) {
        return null;
    }

    const distances = options.map((option) =>
        levenshteinDistance(input, option)
    );

    const minDistance = Math.min(...distances);

    if (minDistance > STRING_SIMILARITY_THRESHOLD) {
        return null;
    }

    const minDistanceIndex = distances.indexOf(minDistance);

    return options[minDistanceIndex];
}
