#include <iostream>
#include <vector>
#include <climits>
using namespace std;

// Function to find the smallest and second smallest element
pair<int, int> findSecondSmallest(vector<int>& arr) {
    int n = arr.size();
    
    if (n < 2) {
        cout << "Not enough elements to determine second smallest!" << endl;
        return {-1, -1}; // Error case
    }

    vector<vector<int>> tournament(n); // Store elements in tournament
    for (int i = 0; i < n; i++) {
        tournament[i].push_back(arr[i]);
    }

    // Step 1: Tournament to find the smallest element
    while (tournament.size() > 1) {
        vector<vector<int>> nextRound;
        for (int i = 0; i < tournament.size(); i += 2) {
            if (i + 1 < tournament.size()) {
                // Compare two elements
                if (tournament[i][0] < tournament[i + 1][0]) {
                    tournament[i].push_back(tournament[i + 1][0]); // Store the loser
                    nextRound.push_back(tournament[i]);
                } else {
                    tournament[i + 1].push_back(tournament[i][0]); // Store the loser
                    nextRound.push_back(tournament[i + 1]);
                }
            } else {
                // Odd number of elements, move it forward
                nextRound.push_back(tournament[i]);
            }
        }
        tournament = nextRound;
    }

    int smallest = tournament[0][0];
    int secondSmallest = INT_MAX;

    // Step 2: Find the second smallest among elements that lost to the smallest
    for (int i = 1; i < tournament[0].size(); i++) {
        secondSmallest = min(secondSmallest, tournament[0][i]);
    }

    return {smallest, secondSmallest};
}

// Driver Code
int main() {
    vector<int> arr = {4, 7, 1, 8, 3, 2, 9, 5};
    pair<int, int> result = findSecondSmallest(arr);

    cout << "Smallest Element: " << result.first << endl;
    cout << "Second Smallest Element: " << result.second << endl;

    return 0;
}
