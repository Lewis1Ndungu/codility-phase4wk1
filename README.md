# codility-phase4wk1

## Challenge 1:Merge overlapping strings(Toy Problem)
Write a function that merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"

"abaab" + "aabab" => "abaabab"

"abc" + "def" => "abcdef"

"abc" + "abc" => "abc"

NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

### RUBY
This function first initializes an empty string called overlap, which will hold the common suffix/prefix of the two input strings. It then loops through the first string, comparing each substring of length i with the end of the second string using the end_with? method. If a match is found, the substring is stored in overlap.Once the overlap has been determined, the function concatenates the two strings together while taking care to only include the non-overlapping parts once. If overlap is empty, it means there is no common suffix/prefix, so the two strings are simply concatenated together. Otherwise, the function concatenates str1 with str2 starting from the index after the overlap, which can be obtained using overlap.length


### JAVASCRIPT
The function first checks if either string is empty or null and returns the non-empty string if that's the case. It then calculates the lengths of the two strings and iterates through the possible overlap lengths from 1 to the minimum length of the two strings. When it finds a matching overlap, it concatenates the first string with the remaining characters of the second string. If there is no overlap, the function simply concatenates the two strings.
