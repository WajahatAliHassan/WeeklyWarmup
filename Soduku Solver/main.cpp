#include <bits/stdc++.h>
using namespace std;

// Function to solve the Sudoku puzzle using backtracking
void helper(int r, int c, vector<vector<char>> &a, map<pair<int, int>, map<int, int>> &mp, vector<map<int, int>> row, vector<map<int, int>> col) {
 // If we have filled all cells (reached the end of the puzzle), print and return
	if (r == 9) {
        for (auto it : a) {
            for (auto i : it) {
                cout << i << " ";
            }
            cout << "\n";
        }
        cout << "\n";
        return; // Remove this "return" statement
    }
// If we have reached the end of the current row, move to the next row
    if (c == 9) {
        helper(r + 1, 0, a, mp, row, col);
        return;
    }
// If the current cell is not empty, move to the next cell
    if (a[r][c] != '.') {
        helper(r, c + 1, a, mp, row, col);
        return;
    }
// Try placing numbers from 1 to 9 in the current cell
    for (int i = 1; i <= 9; i++) {
        int rw = r / 3, cl = c / 3;
// Check if the number is not present in the current row, column, or 3x3 subgrid
        if (!mp[{rw, cl}][i] && !row[r][i] && !col[c][i]) {
            mp[{rw, cl}][i] = 1;
            row[r][i] = 1;
            col[c][i] = 1;
            a[r][c] = i + '0';
// Recursively move to the next cell
            helper(r, c + 1, a, mp, row, col);
// Backtrack by resetting the values
            mp[{rw, cl}][i] = 0;
            row[r][i] = 0;
            col[c][i] = 0;
            a[r][c] = '.';
        }
    }
}
// Function to solve the Sudoku puzzle
void SolveSudoku(vector<vector<char>>&a){
	map<pair<int,int>,map<int,int>>mp;
	vector<map<int,int>> row(9);
	vector<map<int,int>> col(9);
// Initialize the maps and vectors based on the given puzzle
	for(int i=0; i<9; i++){
		for(int j=0; j<9; j++){
			if(a[i][j] !='.'){
				mp[{i/3,j/3}][a[i][j]-'0'] = 1;
				row[i][a[i][j]-'0'] = 1;
				col[j][a[i][j]-'0'] = 1;
			}
		}
	}
// Start solving the Sudoku puzzle
	helper(0,0,a,mp,row,col);
}

int main() {
	// Initial Sudoku puzzle
    vector<vector<char>> sudoku = {
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'}
    };
    // Call the SolveSudoku func.
    SolveSudoku(sudoku);
    
    return 0;
}
