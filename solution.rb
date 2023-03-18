def merge_strings(str1, str2)
    overlap = ""
    
    # Loop through the first string and compare each substring of length i 
    # with the end of the second string. If a match is found, set overlap to that substring.
    (1..str1.length).each do |i|
      if str2.end_with?(str1[0..i-1])
        overlap = str1[0..i-1]
      end
    end
    
    # Concatenate the two strings together, taking care to only include the non-overlapping parts once.
    if overlap.empty?
      str1 + str2
    else
      str1 + str2[overlap.length..-1]
    end
  end
  