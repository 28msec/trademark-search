jsoniq version "1.0";
(:
 : Copyright 2014 28msec Inc.
 :)

(:~
 : This module contains functions to retrieve text
 :
 : @author Alexander.Kreutz@28msec.com
 :)

module namespace texts = "http://www.28msec.com/modules/trademarks/texts";

(:~
 : <p>
 : Retrieves textual representation of mark drawing code of a trademark
 : </p>
 : 
 : @param $trademark The trademark containing the mark drawing code
 : @return The textual representation of the mark drawing code
 :)
declare function texts:mark-drawing-code($trademark as object())
as string
{
  string-join((
  if ($trademark.case-file-header.filing-date lt "20031102")
  then
    switch (substring($trademark.case-file-header.mark-drawing-code,1,1))
    case "1" return "Typeset: Word(s)/letter(s)/number(s)" 
    case "2" return "Illustration: Drawing or design without any word(s)/letter(s)/ number(s)" 
    case "3" return "Illustration: Drawing or design which also includes word(s)/ letter(s)/number(s)"
    case "4" return "Illustration: Drawing with word(s)/letter(s)/number(s) in Block form"
    case "5" return "Illustration: Drawing with word(s)/letter(s)/number(s) in Stylized form"
    case "6" return "No drawing possible"   
    default return "E1"
  else
    switch (substring($trademark.case-file-header.mark-drawing-code,1,1))
    case "1" return "No longer used" 
    case "2" return "Illustration: Drawing or design without any word(s)/letter(s)/ number(s)" 
    case "3" return "Illustration: Drawing or design which also includes word(s)/ letter(s)/number(s)"
    case "4" return "Standard character mark" 
    case "5" return "Illustration: Drawing with word(s)/letter(s)/number(s) in Stylized form" 
    case "6" return "No drawing possible"
    default return "E2"
  ,
  if (substring($trademark.case-file-header.mark-drawing-code,2) eq "000")
  then ""
  else switch (substring($trademark.case-file-header.mark-drawing-code,2,1))
    case "R" return " - 150% Enlargement" 
    case "S" return " - 75% Reduction" 
    case "T" return " - 50% Reduction" 
    case "U" return " - 37.5% Reduction" 
    case "V" return " - 30% Reduction" 
    case "W" return " - 25% Reduction" 
    case "X" return " - 22% Reduction" 
    default return "E3"
  ),"")
};

(:~
 : <p>
 : Retrieves textual representation of a status code 
 : </p>
 : 
 : @param $status-code The trademark containing the status code
 : @return The textual representation of the status code
 :)
declare function texts:status-code($status-code as string)
as string
{
    switch($status-code)
    case "000" return "UNKNOWN"
    case "400" return "IR CANCELLED; APPLICATION PENDING TRANSFORMATION"
    case "401" return "IR CANCELLED - NO TRANSFORMATION FILED"
    case "402" return "IR CANCELLED--CASE ABANDONED/CANCELLED"
    case "403" return "IR CANCELLED; REGISTRATION PENDING TRANSFORMATION"
    case "600" return "ABANDONED - INCOMPLETE RESPONSE"
    case "601" return "ABANDONED - EXPRESS"
    case "602" return "ABANDONED-FAILURE TO RESPOND OR LATE RESPONSE"
    case "603" return "ABANDONED - AFTER EX PARTE APPEAL"
    case "604" return "ABANDONED - AFTER INTER-PARTES DECISION"
    case "605" return "ABANDONED - AFTER PUBLICATION"
    case "606" return "ABANDONED - NO STATEMENT OF USE FILED"
    case "607" return "ABANDONED - DEFECTIVE STATEMENT OF USE"
    case "608" return "ABANDONED - AFTER PETITION DECISION"
    case "609" return "ABANDONED - DEFECTIVE DIVIDED APPLICATION"
    case "612" return "PETITION TO REVIVE-RECEIVED"
    case "614" return "ABANDONED PETITION TO REVIVE-DENIED"
    case "616" return "REVIVED - AWAITING FURTHER ACTION"
    case "618" return "ABANDONED FILE - BACKFILE"
    case "620" return "BACKFILE APPLICATION ADDED TO DATA BASE - STATUS NOT RECORDED"
    case "622" return "MISASSIGNED SERIAL NUMBER"
    case "624" return "REGISTERED - BACKFILE"
    case "625" return "REGISTRATION ADDED TO THE DATA BASE-STATUS UNCLEAR"
    case "626" return "REGISTERED - BACKFILE CANCELLED OR EXPIRED"
    case "630" return "NEW APPLICATION - RECORD INITIALIZED NOT ASSIGNED TO EXAMINER"
    case "631" return "NEW APPLICATION - DIVIDED - INITIAL PROCESSING"
    case "632" return "INFORMAL APPLICATION"
    case "638" return "NEW APPLICATION - ASSIGNED TO EXAMINER"
    case "640" return "NON-FINAL ACTION COUNTED - NOT MAILED"
    case "641" return "NON-FINAL ACTION - MAILED"
    case "642" return "INVENTORIED AS REJECTED"
    case "643" return "PREVIOUS ACTION/ALLOWANCE COUNT WITHDRAWN"
    case "644" return "FINAL REFUSAL COUNTED - NOT MAILED"
    case "645" return "FINAL REFUSAL - MAILED"
    case "646" return "EXAMINERS AMENDMENT COUNTED - NOT MAILED"
    case "647" return "EXAMINERS AMENDMENT - MAILED"
    case "648" return "ACTION CONTINUING FINAL COUNTED - NOT MAILED"
    case "649" return "ACTION CONTINUING FINAL - MAILED"
    case "650" return "SUSPENSION INQUIRY COUNTED - NOT MAILED"
    case "651" return "SUSPENSION INQUIRY - MAILED"
    case "652" return "SUSPENSION LETTER COUNTED - NOT MAILED"
    case "653" return "SUSPENSION LETTER - MAILED"
    case "654" return "REPORT COMPLETED SUSPENSION CHECK - CASE STILL SUSPENDED"
    case "655" return "EXAMINER'S AMENDMENT/PRIORITY ACTION COUNTED NOT MAILED"
    case "656" return "EXAMINER'S AMENDMENT/PRIORITY ACTION MAILED" 
    case "657" return "PRIORITY ACTION COUNTED NOT MAILED"
    case "658" return "PRIORITY ACTION MAILED"
    case "659" return "SUBSEQUENT FINAL REFUSAL COUNTED NOT MAILED"
    case "660" return "SUBSEQUENT FINAL MAILED"
    case "661" return "RESPONSE AFTER NON-FINAL ACTION - ENTERED"
    case "663" return "RESPONSE AFTER FINAL REJECTION - ENTERED"
    case "664" return "INVENTORIED AS AMENDED"
    case "665" return "NOTICE OF UNRESPONSIVE AMENDMENT - COUNTED"
    case "666" return "NOTICE OF UNRESPONSIVE AMENDMENT - MAILED"
    case "667" return "REFUSAL WITHDRAWL LETTER - COUNTED"
    case "668" return "REFUSAL WITHDRAWL LETTER - MAILED"
    case "672" return "REINSTATED - AWAITING FURTHER ACTION"
    case "673" return "PETITION GRANTED- AWAITING FURTHER ACTION"
    case "680" return "APPROVED FOR PUBLICATION"
    case "681" return "PUBLICATION/ISSUE REVIEW COMPLETE"
    case "682" return "ON HOLD - ADDITIONAL PUB REVIEW REQUIRED"
    case "686" return "PUBLISHED FOR OPPOSITION"
    case "688" return "NOTICE OF ALLOWANCE - ISSUED"
    case "689" return "NOTICE OF ALLOWANCE - WITHDRAWN"
    case "690" return "NOTICE OF ALLOWANCE - CANCELLED"
    case "692" return "WITHDRAWN BEFORE PUBLICATION"
    case "693" return "WITHDRAWN FROM ISSUE-JURISDICTION RESTORED"
    case "694" return "WITHDRAWN BEFORE ISSUE"
    case "700" return "REGISTERED"
    case "701" return "SECTION 8-ACCEPTED"
    case "702" return "SECTION 8 & 15-ACCEPTED AND ACKNOWLEDGED"
    case "703" return "SECTION 15-ACKNOWLEDGED"
    case "704" return "PARTIAL SECTION 8 ACCEPTED"
    case "705" return "PARTIAL SECTION 8 & 15 ACCEPTED AND ACKNOWLEDGED"
    case "710" return "CANCELLED - SECTION 8"
    case "711" return "CANCELLED - SECTION 7"
    case "712" return "CANCELLED BY COURT ORDER (SECTION 37)"
    case "713" return "CANCELLED - SECTION 18"
    case "714" return "CANCELLED - SECTION 24"
    case "715" return "CANCELLED - RESTORED TO PENDENCY"
    case "716" return "INADVERTENTLY ISSUED REGISTRATION NUMBER CANCELLED"
    case "717" return "REGISTERED - AWAITING DIVISIONAL FEE"
    case "718" return "REQUEST FOR FIRST EXTENSION - FILED"
    case "719" return "REQUEST FOR SECOND EXTENSION - FILED"
    case "720" return "REQUEST FOR THIRD EXTENSION - FILED"
    case "721" return "REQUEST FOR FOURTH EXTENSION - FILED"
    case "722" return "REQUEST FOR FIFTH EXTENSION - FILED"
    case "724" return "EXTENSION REQUEST REFUSAL - COUNTED"
    case "725" return "EXTENSION REQUEST REFUSAL - MAILED"
    case "730" return "FIRST EXTENSION - GRANTED"
    case "731" return "SECOND EXTENSION - GRANTED"
    case "732" return "THIRD EXTENSION - GRANTED"
    case "733" return "FOURTH EXTENSION - GRANTED"
    case "734" return "FIFTH EXTENSION - GRANTED"
    case "740" return "POST REGISTRATION PAPER FILED - ASSIGNED TO PARA-LEGAL" 
    case "744" return "STATEMENT OF USE - FILED"
    case "745" return "STATEMENT OF USE - INFORMAL-LETTER MAILED"
    case "746" return "STATEMENT OF USE - INFORMAL-RESPONSE ENTERED"
    case "748" return "STATEMENT OF USE - TO EXAMINER"
    case "752" return "SU - EXAMINER STATEMENT COUNTED - NOT MAILED"
    case "753" return "SU - EXAMINER STATEMENT - MAILED"
    case "756" return "EXAMINER STATEMENT COUNTED - NOT MAILED"
    case "757" return "EXAMINER STATEMENT - MAILED"
    case "760" return "EX PARTE APPEAL PENDING"
    case "762" return "EX PARTE APPEAL TERMINATED"
    case "763" return "EX PARTE APPEAL-REFUSAL AFFIRMED"
    case "764" return "EX PARTE APPEAL DISMISSED AS MOOT"
    case "765" return "CONCURRENT USE PROCEEDING TERMINATED-GRANTED"
    case "766" return "CONCURRENT USE PROCEEDING TERMINATED-DENIED"
    case "771" return "CONCURRENT USE PROCEEDING PENDING"
    case "772" return "INTERFERENCE PROCEEDING PENDING"
    case "773" return "EXTENSION OF TIME TO OPPOSE PROCESS - TERMINATED"
    case "774" return "OPPOSITION PENDING"
    case "775" return "OPPOSITION DISMISSED"
    case "777" return "OPPOSITION TERMINATED-SEE TTAB RECORDS"
    case "778" return "CANCELLATION DISMISSED"
    case "779" return "OPPOSITION SUSTAINED"
    case "780" return "CANCELLATION TERMINATED - SEE TTAB RECORDS"
    case "790" return "CANCELLATION PENDING"
    case "794" return "JURISDICTION RESTORED TO EXAMINING ATTORNEY"
    case "800" return "REGISTERED AND RENEWED"
    case "801" return "OPPOSITION PAPERS FILED"
    case "802" return "REQUEST FOR EXTENSION OF TIME TO FILE OPPOSITION"
    case "803" return "AMENDMENT AFTER PUBLICATION"
    case "804" return "APPEAL RECEIVED AT TTAB"
    case "806" return "SU - NON-FINAL ACTION COUNTED - NOT MAILED"
    case "807" return "SU - NON-FINAL ACTION - MAILED"
    case "808" return "SU - FINAL REFUSAL COUNTED - NOT MAILED"
    case "809" return "SU - FINAL REFUSAL - MAILED"
    case "810" return "SU - EXAMINER'S AMENDMENT COUNTED - NOT MAILED"
    case "811" return "SU - EXAMINER'S AMENDMENT - MAILED"
    case "812" return "SU - ACTION CONTINUING FINAL COUNTED - NOT MAILED"
    case "813" return "SU - ACTION CONTINUING FINAL - MAILED"
    case "814" return "SU - RESPONSE AFTER NON-FINAL ACTION - ENTERED"
    case "815" return "SU - RESPONSE AFTER FINAL REJECTION - ENTERED"
    case "816" return "SU - NOTICE OF UNRESPONSIVE AMENDMENT - COUNTED"
    case "817" return "SU - NOTICE OF UNRESPONSIVE AMENDMENT - MAILED"
    case "818" return "SU - STATEMENT OF USE ACCEPTED - APPROVED FOR REGISTRATION"
    case "819" return "SU - REGISTRATION REVIEW COMPLETE"
    case "820" return "SU - EXAMINER'S AMENDMENT/PRIORITY ACTION COUNTED NOT MAILED"
    case "821" return "SU - EXAMINER'S AMENDMENT/PRIORITY ACTION MAILED"
    case "822" return "SU - PRIORITY ACTION COUNTED NOT MAILED"
    case "823" return "SU - PRIORITY ACTION MAILED"
    case "824" return "SU - SUBSEQUENT FINAL REFUSAL WRITTEN"
    case "825" return "SU - SUBSEQUENT FINAL MAILED" 
    case "900" return "EXPIRED"
    case "969" return "NON REGISTRATION DATA"
    case "970" return "RECORD CREATED DUE TO ASSIGNMENT REQUEST"
    case "973" return "PENDING PETITION/COURT DECISION"
    default return "UNKNWON"
};