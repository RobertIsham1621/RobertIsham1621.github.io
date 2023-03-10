<!--
/***************************************************
GLOBAL VARIABLES FOR FORMATTING FONTS AND TEXT
*****************************************************/
/*********
COLORS
**********/
var DATE_HIGHLIGHT_BACKGROUND		= '999999';
var DATE_HIGHLIGHT_COLOR		= 'ffffff';
var DATE_HIGHLIGHT_BORDER_COLOR		= '777777';
var DAY_OF_WEEK_COLOR			= '777777'; 
var HIGHLIGHT_DAY_OF_WEEK		= '777777';
var DATE_COLOR				= '777777';
var MONTH_COLOR				= '777777';
var YEAR_COLOR				= '777777';
var MONTH_YEAR_BACKGROUND		= '';
var CALENDAR_BORDER_COLOR		= '';
var CALENDAR_BACKGROUND			= '';

/*********
FONTS
**********/
var DATE_HIGHLIGHT_FONT			= 'Arial';
var DAY_OF_WEEK_FONT			= 'Arial';
var HIGHLIGHT_DAY_OF_WEEK_FONT		= 'Arial';
var DATE_FONT				= 'Arial';
var MONTH_FONT				= 'Trebuchet MS';
var YEAR_FONT				= 'Trebuchet MS';

/***********
FONT SIZES
************/
var DATE_HIGHLIGHT_SIZE			= 1;
var DATE_HIGHLIGHT_BORDER_SIZE		= 0;
var DATE_SIZE				= 1;
var DAY_OF_WEEK_SIZE			= 1;
var HIGHLIGHT_DAY_OF_WEEK_SIZE		= 2;
var MONTH_SIZE				= 3;
var YEAR_SIZE				= 3;
var CALENDAR_BORDER_SIZE		= 0; 

/**************
SET ARRAYS
****************/
var day_of_week = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat'); 
var month_of_year = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

/********************************
DECLARE AND INITIALIZE VARIABLES
********************************/
var Calendar = new Date();

var year = Calendar.getFullYear();	// Returns year
var month = Calendar.getMonth();	// Returns month (0-11)
var today = Calendar.getDate();		// Returns day (1-31)
var weekday = Calendar.getDay();	// Returns day (1-31)

var DAYS_OF_WEEK = 7;			// "constant" for number of days in a week
var DAYS_OF_MONTH = 31;			// "constant" for number of days in a month
var cal;				// Used for printing

Calendar.setDate(1);			// Start the calendar day at '1'
Calendar.setMonth(month);		// Start the calendar month at now


var TR_start = '<TR>';
var TR_end = '</TR>';
var highlight_start = '<TD WIDTH="25"><TABLE CELLSPACING=0 BORDER="' + DATE_HIGHLIGHT_BORDER_SIZE + '" BGCOLOR="'+ DATE_HIGHLIGHT_BACKGROUND +'" BORDERCOLOR="' + DATE_HIGHLIGHT_BORDER_COLOR + '"><TR><TD WIDTH=33><CENTER>';
var highlight_end   = '</CENTER></TD></TR></TABLE>';
var TD_start = '<TD WIDTH="25" BACKGROUND="' + CALENDAR_BACKGROUND +'"><CENTER>';
var TD_end = '</CENTER></TD>';

/**************************************
BEGIN CODE FOR CALENDAR
NOTE: You can format the 'BORDER', 'BGCOLOR', 'CELLPADDING', 'BORDERCOLOR'
      tags to customize your caledanr's look. I used a style sheet on my
      '.html' page to format the table fonts. You may just want to add it
      in here.  If you have any trouble, just e-mail me at: 
                      bryan_1978@yahoo.com
**********************************************/
cal =  '<TABLE BORDER="' + CALENDAR_BORDER_SIZE + '" CELLSPACING=0 CELLPADDING=0 BORDERCOLOR="' + CALENDAR_BORDER_COLOR + '"><TR><TD>';
cal += '<TABLE BORDER="0" CELLSPACING=0 CELLPADDING=2 BGCOLOR="' + CALENDAR_BACKGROUND + '">' + TR_start;
cal += '<TD COLSPAN="' + DAYS_OF_WEEK + '" BGCOLOR="' + MONTH_YEAR_BACKGROUND + '"><CENTER><B>';
cal += '<FONT COLOR="' + MONTH_COLOR + '" FACE="'+ MONTH_FONT +'" SIZE="'+ MONTH_SIZE +'">' + month_of_year[month]  + ' </FONT>&nbsp;&nbsp;' + '<FONT COLOR="' + YEAR_COLOR + '" FACE="'+ YEAR_FONT +'" SIZE="'+ YEAR_SIZE +'">' + year + '</B></FONT>' + TD_end + TR_end;
cal += TR_start;

 /*********************************
 **********************************
    DO NOT EDIT BELOW THIS POINT
 **********************************
 **********************************/
// LOOPS FOR EACH DAY OF WEEK
for(index=0; index < DAYS_OF_WEEK; index++)
{
  // BOLD TODAY'S DAY OF WEEK
  if(weekday == index){
    cal += TD_start + '<B><FONT COLOR="' + HIGHLIGHT_DAY_OF_WEEK + '" FACE="'+ HIGHLIGHT_DAY_OF_WEEK_FONT +'" SIZE="'+ HIGHLIGHT_DAY_OF_WEEK_SIZE +'">' + day_of_week[index] + '</FONT></B>' + TD_end;
  }

  // PRINTS DAY
  else{
    cal += TD_start + '<FONT COLOR="' + DAY_OF_WEEK_COLOR + '" FACE="'+ DAY_OF_WEEK_FONT +'" SIZE="'+ DAY_OF_WEEK_SIZE +'">' + day_of_week[index] + '</FONT>' + TD_end;
  }
}

cal += TD_end + TR_end;
cal += TR_start;

// FILL IN BLANK GAPS UNTIL TODAY'S DAY
for(index=0; index < Calendar.getDay(); index++)
  cal += TD_start + '&nbsp; ' + TD_end;

// LOOPS FOR EACH DAY IN CALENDAR
for(index=0; index < DAYS_OF_MONTH; index++)
{
  if( Calendar.getDate() > index )
  {
     // RETURNS THE NEXT DAY TO PRINT
     week_day =Calendar.getDay();

     // START NEW ROW FOR FIRST DAY OF WEEK
     if(week_day == 0)
       cal += TR_start; 
  
     if(week_day != DAYS_OF_WEEK)
     { 		
       // SET VARIABLE INSIDE LOOP FOR INCREMENTING PURPOSES	
       var day  = Calendar.getDate();


       // HIGHLIGHT TODAY'S DATE
       if( today==Calendar.getDate() ){
         cal += highlight_start + '<FONT COLOR="' + DATE_HIGHLIGHT_COLOR + '" FACE="'+ DATE_HIGHLIGHT_FONT +'" SIZE="'+ DATE_HIGHLIGHT_SIZE +'">' + day + '</FONT>' + highlight_end + TD_end;
       }

       // PRINTS DAY
       else{  
         cal += TD_start + '<FONT COLOR="' + DATE_COLOR + '" FACE="'+ DATE_FONT +'" SIZE="'+ DATE_SIZE +'">' +  day + '</FONT>' + TD_end;        
       }

      }

      // END ROW FOR LAST DAY OF WEEK	 
      if(week_day == DAYS_OF_WEEK)
         cal += TR_end;
   }

   // INCREMENTS UNTIL END OF THE MONTH
   Calendar.setDate(Calendar.getDate()+1);

}// end for loop

cal += '</TD></TR></TABLE></TABLE>';

/******************
PRINT CALENDAR
********************/
document.write(cal);
//-->

<!-----------END JS----->
