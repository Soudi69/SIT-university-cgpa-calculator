function Grade(mode)
{
	document.getElementById("def").style.visibility=mode;	
		snum=parseInt(document.getElementById("subs").value);
	document.getElementById("RES").style.visibility="hidden";
}
function setOff()
{
	document.getElementById("def").style.visibility="hidden";
	document.getElementById("CIE").style.visibility="hidden";	
	document.getElementById("SEE").style.visibility="hidden";
	document.getElementById("RES").style.visibility="hidden";
}
function CIEmode(mode)
{
		document.getElementById("CIE").style.visibility=mode;
		document.getElementById("RES").style.visibility="hidden";
}
function SEEmode(mode)
{
		document.getElementById("SEE").style.visibility=mode;
		document.getElementById("RES").style.visibility="hidden";
}
function RESmode(mode)
{
	document.getElementById("def").style.visibility="hidden";
	document.getElementById("CIE").style.visibility="hidden";	
	document.getElementById("SEE").style.visibility="hidden";
		document.getElementById("RES").style.visibility=mode;
		ToRES();
}
// Values copying Block
 function copyVal()
 {
	//Subject name 
   sm1=document.getElementById("sn1").value;
   document.getElementById("s1").value=document.getElementById("sub1").value=sm1;
   sm2=document.getElementById("sn2").value;
   document.getElementById("s2").value=document.getElementById("sub2").value=sm2;
   sm3=document.getElementById("sn3").value;
   document.getElementById("s3").value=document.getElementById("sub3").value=sm3;
   sm4=document.getElementById("sn4").value;
   document.getElementById("s4").value=document.getElementById("sub4").value=sm4;
   sm5=document.getElementById("sn5").value;
   document.getElementById("s5").value=document.getElementById("sub5").value=sm5;
   sm6=document.getElementById("sn6").value;
   document.getElementById("s6").value=document.getElementById("sub6").value=sm6;
   sm7=document.getElementById("sn7").value;
   document.getElementById("s7").value=document.getElementById("sub7").value=sm7;
   sm8=document.getElementById("sn8").value;
   document.getElementById("s8").value=document.getElementById("sub8").value=sm8;
   sm9=document.getElementById("sn9").value;
   document.getElementById("s9").value=document.getElementById("sub9").value=sm9;
   sm10=document.getElementById("sn10").value;
   document.getElementById("s10").value=document.getElementById("sub10").value=sm10;
    sm11=document.getElementById("sn11").value;
   document.getElementById("s11").value=document.getElementById("sub11").value=sm11;
   sm12=document.getElementById("sn12").value;
   document.getElementById("s12").value=document.getElementById("sub12").value=sm12;
   sm13=document.getElementById("sn13").value;
   document.getElementById("s13").value=document.getElementById("sub13").value=sm13;
   sm14=document.getElementById("sn14").value;
   document.getElementById("s14").value=document.getElementById("sub14").value=sm14;
   sm15=document.getElementById("sn15").value;
   document.getElementById("s15").value=document.getElementById("sub15").value=sm15;
   
   
   //Credits
 document.getElementById("c1").value=parseFloat(document.getElementById("cr1").value); 
 document.getElementById("c2").value=parseFloat(document.getElementById("cr2").value); 
 document.getElementById("c3").value=parseFloat(document.getElementById("cr3").value); 
 document.getElementById("c4").value=parseFloat(document.getElementById("cr4").value); 
 document.getElementById("c5").value=parseFloat(document.getElementById("cr5").value); 
 document.getElementById("c6").value=parseFloat(document.getElementById("cr6").value); 
 document.getElementById("c7").value=parseFloat(document.getElementById("cr7").value); 
 document.getElementById("c8").value=parseFloat(document.getElementById("cr8").value); 
 document.getElementById("c9").value=parseFloat(document.getElementById("cr9").value); 
 document.getElementById("c10").value=parseFloat(document.getElementById("cr10").value); 
 document.getElementById("c11").value=parseFloat(document.getElementById("cr11").value); 
 document.getElementById("c12").value=parseFloat(document.getElementById("cr12").value); 
 document.getElementById("c13").value=parseFloat(document.getElementById("cr13").value); 
 document.getElementById("c14").value=parseFloat(document.getElementById("cr14").value); 
 document.getElementById("c15").value=parseFloat(document.getElementById("cr15").value); 
	
//CIE
 document.getElementById("cm1").value=parseFloat(document.getElementById("cie1").value); 
 document.getElementById("cm2").value=parseFloat(document.getElementById("cie2").value); 
 document.getElementById("cm3").value=parseFloat(document.getElementById("cie3").value); 
 document.getElementById("cm4").value=parseFloat(document.getElementById("cie4").value); 
 document.getElementById("cm5").value=parseFloat(document.getElementById("cie5").value); 
 document.getElementById("cm6").value=parseFloat(document.getElementById("cie6").value); 
 document.getElementById("cm7").value=parseFloat(document.getElementById("cie7").value); 
 document.getElementById("cm8").value=parseFloat(document.getElementById("cie8").value); 
 document.getElementById("cm9").value=parseFloat(document.getElementById("cie9").value); 
 document.getElementById("cm10").value=parseFloat(document.getElementById("cie10").value); 		
 document.getElementById("cm11").value=parseFloat(document.getElementById("cie11").value); 		
 document.getElementById("cm12").value=parseFloat(document.getElementById("cie12").value); 		
 document.getElementById("cm13").value=parseFloat(document.getElementById("cie13").value); 		
 document.getElementById("cm14").value=parseFloat(document.getElementById("cie14").value); 		
 document.getElementById("cm15").value=parseFloat(document.getElementById("cie15").value); 	
  
}   

// Calculation and Conditional Operations Block
 function calculate()
   {
     var n;
       n=parseInt(document.form1.subs.value);
	   if(n==1)
	   aray1();
	   else if(n==2)
		 	  { aray1(); aray2();}
	   else if(n==3)
		  {   aray1();	aray2(); aray3(); }
			 	  
	   else if(n==4)
		  {  aray1();	aray2(); aray3();  aray4(); }		  
	   else if(n==5)
		    {
			  aray1();	aray2(); aray3();
			  aray4();  aray5();		
			}	
	   else if(n==6)
		  {
			  aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
		  }
	   else if(n==7)
		    {
			 aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7();
			}	
	   else if(n==8)
		  {
			 aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7(); aray8(); 
		 }
	   else if(n==9)
		    {
			 aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7(); aray8();  aray9();
			}
	   else if(n==10)
		    {
			 aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7(); aray8();  aray9();
			 aray10();
			}
	   else if(n==11)
		  {
		     aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7(); aray8();  aray9();
			 aray10(); aray11();
		 }
		
	   else if(n==12)
		  {
		     aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7(); aray8();  aray9();
			 aray10(); aray11();  aray12();
		 }
	   else if(n==13)
		  {
		     aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7(); aray8();  aray9();
			 aray10(); aray11();  aray12();
			 aray13();
		 }
	   else if(n==14)
		  {   aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7(); aray8();  aray9();
			 aray10(); aray11();  aray12();
			 aray13(); aray14(); 
		  }	
	   else if(n==15)
		  {  aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7(); aray8();  aray9();
			 aray10(); aray11();  aray12();
			 aray13(); aray14(); aray15();	
			}	
	   else
	    { window.alert("Invalid number of subjects! Please check it and restart!"); return; }
	}
 
 function calc(a)
  {
	 var i; m=new Array(7);var num;
	for(i=0; i<=3;i++)
	 {
	  if(i==1)
	  {
	   a[i]=a[i]+a[i+1];
	   a[i+1]=0;
	   }
	   if(i==3)
	    {
			if(a[i]>=1 && a[i]<5)
			m[i]=1;
			else if(a[i]==0)
			m[i]=0;
			else if(a[i]>=5 && a[i]<=10)
			m[i]=2;
			else if(a[i]>=11 && a[i]<=15)
			m[i]=3;break;
		}
		m[i]=3;
	   if(a[i]>=1 && a[i]<=5)
		m[i]=1;
		else if(a[i]==0)
		 m[i]=0;
		else if(a[i]>=6 && a[i]<=10)
		m[i]=2;
		else if(a[i]>=11 && a[i]<=15)
		m[i]=3;
		else if(a[i]>=16 && a[i]<=20)
		m[i]=4;
		else if(a[i]>=21 && a[i]<=25)
		m[i]=5;
		else if(a[i]>=26 && a[i]<=30)
		m[i]=6;
		else { ; m[i]=0;}
     }
	 
		
    if(a[4]>4)
	 { m[4]=0; }
	else
	  m[4]=a[4];
	  
	  var ms; ms=0; ms=parseInt(ms);
	 for(i=5;i<7;i++) 
	  {
	    if(a[i]>50)
		  {  m[i]=0; }
		 else if(a[i]==0)
		   m[i]=0;
		 else
		    {  
				m[i]=(a[i]*0.34);
				ms=parseInt(m[i]);
				    if(ms<(m[i]+0.00000000001))
						{ 
						   ms=parseInt(ms); 
						   ms=ms+1;  m[i]=ms; 
						 }
			}
			
	  }
	  	 
   num=parseFloat(num); num=0;
   
	 for( i=0; i<7; i++)
	  num=num+m[i];
	  
	  for( i=0; i<7; i++)
	  	 return(num);
  }
 
  // Retrieving and Displaying Values Block
 function aray1()
	 {
			var num,i;
			a=new Array(7);	
	
		a[0]=parseInt(document.getElementById("sq1").value);
		a[1]=parseInt(document.getElementById("sqq1").value);
		a[2]=parseInt(document.getElementById("sqa1").value);
		a[3]=parseInt(document.getElementById("sqb1").value);
		a[4]=parseInt(document.getElementById("ass1").value);
		a[5]=parseFloat(document.getElementById("ts1").value);
		a[6]=parseFloat(document.getElementById("tss1").value);
		
		document.getElementById("cie1").value=parseInt(calc(a)); 
		
	 }  
	 
	function aray2()
	 {
		var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq2").value);
		a[1]=parseInt(document.getElementById("sqq2").value);
		a[2]=parseInt(document.getElementById("sqa2").value);
		a[3]=parseInt(document.getElementById("sqb2").value);
		a[4]=parseInt(document.getElementById("ass2").value);
		a[5]=parseFloat(document.getElementById("ts2").value);
		a[6]=parseFloat(document.getElementById("tss2").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
		document.getElementById("cie2").value=parseInt(calc(a)); 
		
	 }  
	
 	function aray3()
	 {
		var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq3").value);
		a[1]=parseInt(document.getElementById("sqq3").value);
		a[2]=parseInt(document.getElementById("sqa3").value);
		a[3]=parseInt(document.getElementById("sqb3").value);
		a[4]=parseInt(document.getElementById("ass3").value);
		a[5]=parseFloat(document.getElementById("ts3").value);
		a[6]=parseFloat(document.getElementById("tss3").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
		document.getElementById("cie3").value=parseInt(calc(a)); 
		
	 }  
	 
	function aray4()
	 {
	 		var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq4").value);
		a[1]=parseInt(document.getElementById("sqq4").value);
		a[2]=parseInt(document.getElementById("sqa4").value);
		a[3]=parseInt(document.getElementById("sqb4").value);
		a[4]=parseInt(document.getElementById("ass4").value);
		a[5]=parseFloat(document.getElementById("ts4").value);
		a[6]=parseFloat(document.getElementById("tss4").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
		document.getElementById("cie4").value=parseInt(calc(a)); 
		
	 }  
	 
	 
	function aray5()
	 {
		var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq5").value);
		a[1]=parseInt(document.getElementById("sqq5").value);
		a[2]=parseInt(document.getElementById("sqa5").value);
		a[3]=parseInt(document.getElementById("sqb5").value);
		a[4]=parseInt(document.getElementById("ass5").value);
		a[5]=parseFloat(document.getElementById("ts5").value);
		a[6]=parseFloat(document.getElementById("tss5").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
		document.getElementById("cie5").value=parseInt(calc(a)); 
		
	 }  
	 
   function aray6()
	 {	
		var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq6").value);
		a[1]=parseInt(document.getElementById("sqq6").value);
		a[2]=parseInt(document.getElementById("sqa6").value);
		a[3]=parseInt(document.getElementById("sqb6").value);
		a[4]=parseInt(document.getElementById("ass6").value);
		a[5]=parseFloat(document.getElementById("ts6").value);
		a[6]=parseFloat(document.getElementById("tss6").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
		document.getElementById("cie6").value=parseInt(calc(a)); 
		
	 }  
	 
	function aray7()
	 {
			var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq7").value);
		a[1]=parseInt(document.getElementById("sqq7").value);
		a[2]=parseInt(document.getElementById("sqa7").value);
		a[3]=parseInt(document.getElementById("sqb7").value);
		a[4]=parseInt(document.getElementById("ass7").value);
		a[5]=parseFloat(document.getElementById("ts7").value);
		a[6]=parseFloat(document.getElementById("tss7").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
		document.getElementById("cie7").value=parseInt(calc(a)); 
		
	 }  
	 
  function aray8()
	 {
		var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq8").value);
		a[1]=parseInt(document.getElementById("sqq8").value);
		a[2]=parseInt(document.getElementById("sqa8").value);
		a[3]=parseInt(document.getElementById("sqb8").value);
		a[4]=parseInt(document.getElementById("ass8").value);
		a[5]=parseFloat(document.getElementById("ts8").value);
		a[6]=parseFloat(document.getElementById("tss8").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
		document.getElementById("cie8").value=parseInt(calc(a)); 
		
	 }  
	
	function aray9()
	 {
		var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq9").value);
		a[1]=parseInt(document.getElementById("sqq9").value);
		a[2]=parseInt(document.getElementById("sqa9").value);
		a[3]=parseInt(document.getElementById("sqb9").value);
		a[4]=parseInt(document.getElementById("ass9").value);
		a[5]=parseFloat(document.getElementById("ts9").value);
		a[6]=parseFloat(document.getElementById("tss9").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
		document.getElementById("cie9").value=parseInt(calc(a)); 
		
	 }  
	
 function aray10()
	 {
			var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq10").value);
		a[1]=parseInt(document.getElementById("sqq10").value);
		a[2]=parseInt(document.getElementById("sqa10").value);
		a[3]=parseInt(document.getElementById("sqb10").value);
		a[4]=parseInt(document.getElementById("ass10").value);
		a[5]=parseFloat(document.getElementById("ts10").value);
		a[6]=parseFloat(document.getElementById("tss10").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
			
		document.getElementById("cie10").value=parseInt(calc(a)); 
		
	 }  

 function aray11()
	 {
			var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq11").value);
		a[1]=parseInt(document.getElementById("sqq11").value);
		a[2]=parseInt(document.getElementById("sqa11").value);
		a[3]=parseInt(document.getElementById("sqb11").value);
		a[4]=parseInt(document.getElementById("ass11").value);
		a[5]=parseFloat(document.getElementById("ts11").value);
		a[6]=parseFloat(document.getElementById("tss11").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
			
		document.getElementById("cie11").value=parseInt(calc(a)); 
		
	 }  
	 
	  function aray12()
	 {
			var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq12").value);
		a[1]=parseInt(document.getElementById("sqq12").value);
		a[2]=parseInt(document.getElementById("sqa12").value);
		a[3]=parseInt(document.getElementById("sqb12").value);
		a[4]=parseInt(document.getElementById("ass12").value);
		a[5]=parseFloat(document.getElementById("ts12").value);
		a[6]=parseFloat(document.getElementById("tss12").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
			
		document.getElementById("cie12").value=parseInt(calc(a)); 
		
	 }  
	 
	  function aray13()
	 {
		var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq13").value);
		a[1]=parseInt(document.getElementById("sqq13").value);
		a[2]=parseInt(document.getElementById("sqa13").value);
		a[3]=parseInt(document.getElementById("sqb13").value);
		a[4]=parseInt(document.getElementById("ass13").value);
		a[5]=parseFloat(document.getElementById("ts13").value);
		a[6]=parseFloat(document.getElementById("tss13").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
			
		document.getElementById("cie13").value=parseInt(calc(a)); 
		
	 }  
	 
	  function aray14()
	 {
			var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq14").value);
		a[1]=parseInt(document.getElementById("sqq14").value);
		a[2]=parseInt(document.getElementById("sqa14").value);
		a[3]=parseInt(document.getElementById("sqb14").value);
		a[4]=parseInt(document.getElementById("ass14").value);
		a[5]=parseFloat(document.getElementById("ts14").value);
		a[6]=parseFloat(document.getElementById("tss14").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
			
		document.getElementById("cie14").value=parseInt(calc(a)); 
		
	 }  
	 
	  function aray15()
	 {

			var num,i;
			a=new Array(7);	
		a[0]=parseInt(document.getElementById("sq15").value);
		a[1]=parseInt(document.getElementById("sqq15").value);
		a[2]=parseInt(document.getElementById("sqa15").value);
		a[3]=parseInt(document.getElementById("sqb15").value);
		a[4]=parseInt(document.getElementById("ass15").value);
		a[5]=parseFloat(document.getElementById("ts15").value);
		a[6]=parseFloat(document.getElementById("tss15").value);
		
		num=0; num=parseFloat(num);
		  for( i=0; i<7; i++)
			num=num+a[i];
			
		document.getElementById("cie15").value=parseInt(calc(a)); 
		
	 }  
function arrays()
 {
   			 aray1();	aray2(); aray3();
			 aray4();  aray5(); aray6();
			 aray7(); aray8();  aray9();
			 aray10(); aray11();  aray12();
			 aray13(); aray14(); 
}

 function credits1()
  {
    s=new Array(15);
	  for(i=0;i<15;i++)
	    {
		  s[i]=parseFloat(0.0);
		 }
		 //Array Initialization Part
		s[0]= parseFloat(document.getElementById("cr1").value); 
		s[1]= parseFloat(document.getElementById("cr2").value);
		s[2]= parseFloat(document.getElementById("cr3").value);
		s[3]= parseFloat(document.getElementById("cr4").value);
		s[4]= parseFloat(document.getElementById("cr5").value);
		s[5]= parseFloat(document.getElementById("cr6").value);
		s[6]= parseFloat(document.getElementById("cr7").value);
		s[7]= parseFloat(document.getElementById("cr8").value);
		s[8]= parseFloat(document.getElementById("cr9").value);
		s[9]= parseFloat(document.getElementById("cr10").value);
		s[10]= parseFloat(document.getElementById("cr11").value);
		s[11]= parseFloat(document.getElementById("cr12").value);
		s[12]= parseFloat(document.getElementById("cr13").value);
		s[13]= parseFloat(document.getElementById("cr14").value);
		s[14]= parseFloat(document.getElementById("cr15").value);
			document.getElementById("crt1").value=totCR(s);
 }
 function totCR(s)
  {
    var n,i;var sum; sum=0; sum=parseFloat(sum);
       n=parseInt(document.form1.subs.value);
	m=new Array(15);

	for(i=0;i<n;i++)
	  {
		sum=sum+s[i];
	  }
	return sum;
 }
 
  
 function credits2()
  {
     s=new Array(15);
	  for(i=0;i<15;i++)
	    {
		  s[i]=parseFloat(0.0);
		 }
		 //Array Initialization Part
		s[0]= parseFloat(document.getElementById("c1").value); 
		s[1]= parseFloat(document.getElementById("c2").value);
		s[2]= parseFloat(document.getElementById("c3").value);
		s[3]= parseFloat(document.getElementById("c4").value);
		s[4]= parseFloat(document.getElementById("c5").value);
		s[5]= parseFloat(document.getElementById("c6").value);
		s[6]= parseFloat(document.getElementById("c7").value);
		s[7]= parseFloat(document.getElementById("c8").value);
		s[8]= parseFloat(document.getElementById("c9").value);
		s[9]= parseFloat(document.getElementById("c10").value);
		s[10]= parseFloat(document.getElementById("c11").value);
		s[11]= parseFloat(document.getElementById("c12").value);
		s[12]= parseFloat(document.getElementById("c13").value);
		s[13]= parseFloat(document.getElementById("c14").value);
		s[14]= parseFloat(document.getElementById("c15").value);
		document.getElementById("crt2").value=parseInt(totCR(s));
 }
 
 // SEE Calculation Block
 
 function calSEE()
 {
     var n;
       n=parseInt(document.form1.subs.value);
	   if(n==1)
	   ss1();
	   else if(n==2)
		 	  { ss1();ss2();}
	   else if(n==3)
		  {   ss1();	ss2(); ss3(); }
			 	  
	   else if(n==4)
		  {  ss1();	ss2(); ss3();  ss4(); }		  
	   else if(n==5)
		    {
			  ss1();	ss2(); ss3();
			  ss4();  ss5();		
			}	
	   else if(n==6)
		  {
			  ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
		  }
	   else if(n==7)
		    {
			 ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7();
			}	
	   else if(n==8)
		  {
			 ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8(n); 
		 }
	   else if(n==9)
		    {
			 ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8(n);  ss9();
			}
	   else if(n==10)
		    {
			 ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8(n);  ss9();
			 ss10();
			}
	   else if(n==11)
		  {
		     ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8(n);  ss9();
			 ss10(); ss11();
		 }
		
	   else if(n==12)
		  {
		     ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8(n);  ss9();
			 ss10(); ss11();  ss12();
		 }
	   else if(n==13)
		  {
		     ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8(n);  ss9();
			 ss10(); ss11();  ss12();
			 ss13();
		 }
	   else if(n==14)
		  {   ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8(n);  ss9();
			 ss10(); ss11();  ss12();
			 ss13(); ss14(); 
		  }	
	   else if(n==15)
		  {  ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8(n);  ss9();
			 ss10(); ss11();  ss12();
			 ss13(); ss14(); ss15();	
			}	
	   else
	    { window.alert("Invalid number of subjects! Please check it and restart!"); return; }
	}
 function ss1()
  {
		n1= parseInt(document.getElementById("cm1").value); 
		n2= parseFloat(document.getElementById("m1").value);
		document.getElementById("G1").value=SEE(n1,n2);
			
 }		

 function ss2()
  {
		ss1();	
		n1= parseInt(document.getElementById("cm2").value); 
		n2= parseFloat(document.getElementById("m2").value);
			document.getElementById("G2").value=SEE(n1,n2);
		 }		
	
 function ss3()
  {
		ss1();ss2();
		n1= parseInt(document.getElementById("cm3").value); 
		n2= parseFloat(document.getElementById("m3").value);
			document.getElementById("G3").value=SEE(n1,n2);
					
 }		
	
 function ss4()
  {
	ss1();	ss2(); ss3();
		n1= parseInt(document.getElementById("cm4").value); 
		n2= parseFloat(document.getElementById("m4").value);
			document.getElementById("G4").value=SEE(n1,n2);

 }		
	
 function ss5()
  {
		ss1();	ss2(); ss3(); ss4();
		n1= parseInt(document.getElementById("cm5").value); 
		n2= parseFloat(document.getElementById("m5").value);
		document.getElementById("G5").value=SEE(n1,n2);
	
 			
 }		
	
 function ss6()
  {
	ss1();ss2(); ss3();
			 ss4();  ss5();
		n1= parseInt(document.getElementById("cm6").value); 
		n2= parseFloat(document.getElementById("m6").value);
			document.getElementById("G6").value=SEE(n1,n2);

 			
 }		
	
 function ss7()
  {
		ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
		n1= parseInt(document.getElementById("cm7").value); 
		n2= parseFloat(document.getElementById("m7").value);
			document.getElementById("G7").value=SEE(n1,n2);

 }		
	
 function ss8()
  {
	ss1(); ss2(); ss3();
			 ss4();  ss5(); ss6();	 ss7();
		n1= parseInt(document.getElementById("cm8").value); 
		n2= parseFloat(document.getElementById("m8").value);
			document.getElementById("G8").value=SEE(n1,n2); 			
 }		
	
 function ss9()
  {
  ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8();  
		n1= parseInt(document.getElementById("cm9").value); 
		n2= parseFloat(document.getElementById("m9").value);
			document.getElementById("G9").value=SEE(n1,n2);		
 }		
	
 function ss10()
  {
  ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8(); ss9();
		n1= parseInt(document.getElementById("cm10").value); 
		n2= parseFloat(document.getElementById("m10").value);
			document.getElementById("G10").value=SEE(n1,n2);		
 }		
	
 function ss11()
  {
	ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8();  ss9();
				n1= parseInt(document.getElementById("cm11").value); 
		n2= parseFloat(document.getElementById("m11").value);
			document.getElementById("G11").value=SEE(n1,n2);		
 }		
	
 function ss12()
  {
	ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8();  ss9();
			 ss10(); ss11(); 
		n1= parseInt(document.getElementById("cm12").value); 
		n2= parseFloat(document.getElementById("m12").value);
			document.getElementById("G12").value=SEE(n1,n2); 		
 }		
	
 function ss13()
  {
		ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8();  ss9();
			 ss10(); ss11();  ss12();
			 n1= parseInt(document.getElementById("cm13").value); 
		n2= parseFloat(document.getElementById("m13").value);
			document.getElementById("G13").value=SEE(n1,n2);		
 }		
	
 function ss14()
  {
	ss1();	ss2(); ss3();
			 ss4();  ss5(); ss6();
			 ss7(); ss8();  ss9();
			 ss10(); ss11();  ss12();
			 ss13(); 
		n1= parseInt(document.getElementById("cm14").value); 
		n2= parseFloat(document.getElementById("m14").value);
			document.getElementById("G14").value=SEE(n1,n2);			
 }		
	
 function ss15()
  {
	 ss1();	ss2(); ss3(); ss4();  ss5(); ss6();
			 ss7(); ss8();  ss9();	 ss10(); ss11();  ss12();
			 ss13(); ss14(); 
		n1= parseInt(document.getElementById("cm15").value); 
		n2= parseFloat(document.getElementById("m15").value);
			document.getElementById("G15").value=SEE(n1,n2); 		
 }		
	
 function SEE(n1,n2)
  {
		n2=n2/2;
		var n=parseFloat(n1+n2);
		var gd;
		if(n<40) gd="F";
		else if(n>=40 && n<=44) gd="E";
		else if(n>=45 && n<50) gd="D";
		else if(n>=50 && n<60) gd="C";
		else if(n>=60 && n<=74) gd="B";
		else if(n>=75 && n<=89) gd="A";
		else if(n>=90) gd="S";
		 else
		  {  return 0;}
		  
			 return gd;
  
  }
  
 function GPs(c,g)
  {
    if(g=="S"||g=="s")
		return (c*10);
	else if(g=="A"||g=="a")
	   return (c*9);
	 else if(g=="B"||g=="b")
	  return (c*8);
	 else if(g=="C"||g=="c")
	  return (c*7);	
	 else if(g=="D"||g=="d")
	  return (c*5);
	 else if(g=="E"||g=="e")
	  return (c*4);
		else return (0);
  }
  
  // RESULT SHEET INITILIZATION
   function ToRES()
	{
	 GradeVal();
	//Subject name 
   sm1=document.getElementById("sub1").value;
   document.getElementById("rsub1").value=sm1;
   
   sm2=document.getElementById("sub2").value;
   document.getElementById("rsub2").value=sm2;

   sm3=document.getElementById("sub3").value;
   document.getElementById("rsub3").value=sm3;

   sm4=document.getElementById("sub4").value;
   document.getElementById("rsub4").value=sm4;

   sm5=document.getElementById("sub5").value;
   document.getElementById("rsub5").value=sm5;

   sm6=document.getElementById("sub6").value;
   document.getElementById("rsub6").value=sm6;

   sm7=document.getElementById("sub7").value;
   document.getElementById("rsub7").value=sm7;

   sm8=document.getElementById("sub8").value;
   document.getElementById("rsub8").value=sm8;

   sm9=document.getElementById("sub9").value;
   document.getElementById("rsub9").value=sm9;

   sm10=document.getElementById("sub10").value;
   document.getElementById("rsub10").value=sm10;

    sm11=document.getElementById("sub11").value;
   document.getElementById("rsub11").value=sm11;

   sm12=document.getElementById("sub12").value;
   document.getElementById("rsub12").value=sm12;

   sm13=document.getElementById("sub13").value;
   document.getElementById("rsub13").value=sm13;

   sm14=document.getElementById("sub14").value;
   document.getElementById("rsub14").value=sm14;

   sm15=document.getElementById("sub15").value;
   document.getElementById("rsub15").value=sm15;

   
    
   //subject code
   document.getElementById("rcd1").value=document.getElementById("sc1").value;
   document.getElementById("rcd2").value=document.getElementById("sc2").value;
   document.getElementById("rcd3").value=document.getElementById("sc3").value;
   document.getElementById("rcd4").value=document.getElementById("sc4").value;
   document.getElementById("rcd5").value=document.getElementById("sc5").value;
   document.getElementById("rcd6").value=document.getElementById("sc6").value;
   document.getElementById("rcd7").value=document.getElementById("sc7").value;
   document.getElementById("rcd8").value=document.getElementById("sc8").value;
   document.getElementById("rcd9").value=document.getElementById("sc9").value;
   document.getElementById("rcd10").value=document.getElementById("sc10").value;
   document.getElementById("rcd11").value=document.getElementById("sc11").value;
   document.getElementById("rcd12").value=document.getElementById("sc12").value;
   document.getElementById("rcd13").value=document.getElementById("sc13").value;
   document.getElementById("rcd14").value=document.getElementById("sc14").value;
   document.getElementById("rcd15").value=document.getElementById("sc15").value;
   
   //CREDITS
 document.getElementById("rcr1").value=parseFloat(document.getElementById("c1").value); 
 document.getElementById("rcr2").value=parseFloat(document.getElementById("c2").value); 
 document.getElementById("rcr3").value=parseFloat(document.getElementById("c3").value); 
 document.getElementById("rcr4").value=parseFloat(document.getElementById("c4").value); 
 document.getElementById("rcr5").value=parseFloat(document.getElementById("c5").value); 
 document.getElementById("rcr6").value=parseFloat(document.getElementById("c6").value); 
 document.getElementById("rcr7").value=parseFloat(document.getElementById("c7").value); 
 document.getElementById("rcr8").value=parseFloat(document.getElementById("c8").value); 
 document.getElementById("rcr9").value=parseFloat(document.getElementById("c9").value); 
 document.getElementById("rcr10").value=parseFloat(document.getElementById("c10").value); 
 document.getElementById("rcr11").value=parseFloat(document.getElementById("c11").value); 
 document.getElementById("rcr12").value=parseFloat(document.getElementById("c12").value); 
 document.getElementById("rcr13").value=parseFloat(document.getElementById("c13").value); 
 document.getElementById("rcr14").value=parseFloat(document.getElementById("c14").value); 
 document.getElementById("rcr15").value=parseFloat(document.getElementById("c15").value); 
 
	//CIE
 document.getElementById("rc1").value=parseFloat(document.getElementById("cm1").value); 	
 document.getElementById("rc2").value=parseFloat(document.getElementById("cm2").value); 	
 document.getElementById("rc3").value=parseFloat(document.getElementById("cm3").value); 	
 document.getElementById("rc4").value=parseFloat(document.getElementById("cm4").value); 	
 document.getElementById("rc5").value=parseFloat(document.getElementById("cm5").value); 	
 document.getElementById("rc6").value=parseFloat(document.getElementById("cm6").value); 	
 document.getElementById("rc7").value=parseFloat(document.getElementById("cm7").value); 	
 document.getElementById("rc8").value=parseFloat(document.getElementById("cm8").value); 	
 document.getElementById("rc9").value=parseFloat(document.getElementById("cm9").value); 	
 document.getElementById("rc10").value=parseFloat(document.getElementById("cm10").value); 	
 document.getElementById("rc11").value=parseFloat(document.getElementById("cm11").value); 	
 document.getElementById("rc12").value=parseFloat(document.getElementById("cm12").value); 	
 document.getElementById("rc13").value=parseFloat(document.getElementById("cm13").value); 	
 document.getElementById("rc14").value=parseFloat(document.getElementById("cm14").value); 	
 document.getElementById("rc15").value=parseFloat(document.getElementById("cm15").value); 	
 
 //GRADE
  document.getElementById("rg1").value=document.getElementById("G1").value; 	
  document.getElementById("rg2").value=document.getElementById("G2").value; 	
  document.getElementById("rg3").value=document.getElementById("G3").value; 	
  document.getElementById("rg4").value=document.getElementById("G4").value; 	
  document.getElementById("rg5").value=document.getElementById("G5").value; 	
  document.getElementById("rg6").value=document.getElementById("G6").value; 	
  document.getElementById("rg7").value=document.getElementById("G7").value; 	
  document.getElementById("rg8").value=document.getElementById("G8").value; 	
  document.getElementById("rg9").value=document.getElementById("G9").value; 	
  document.getElementById("rg10").value=document.getElementById("G10").value; 	
  document.getElementById("rg11").value=document.getElementById("G11").value; 	
  document.getElementById("rg12").value=document.getElementById("G12").value; 	
  document.getElementById("rg13").value=document.getElementById("G13").value; 	
  document.getElementById("rg14").value=document.getElementById("G14").value; 	
  document.getElementById("rg15").value=document.getElementById("G15").value; 	
 }

  function GradeVal()
  {
	gp=new Array(15);var i;		
	var sumGP;
			sumGP=parseFloat(0.0);
	var n;
       n=parseInt(document.form1.subs.value);
	for(i=0;i<n;i++)
	   gp[i]=parseFloat(0.0);
	   
     c=parseFloat(document.getElementById("c1").value);
		gd=document.getElementById("G1").value;
		gp[0]=document.getElementById("rGp1").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c2").value);
		gd=document.getElementById("G2").value;
		gp[1]=document.getElementById("rGp2").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c3").value);
		gd=document.getElementById("G3").value;
		gp[2]=document.getElementById("rGp3").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c4").value);
		gd=document.getElementById("G4").value;
		gp[3]=document.getElementById("rGp4").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c5").value);
		gd=document.getElementById("G5").value;
		gp[4]=document.getElementById("rGp5").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c6").value);
		gd=document.getElementById("G6").value;
		gp[5]=document.getElementById("rGp6").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c7").value);
		gd=document.getElementById("G7").value;
		gp[6]=document.getElementById("rGp7").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c8").value);
		gd=document.getElementById("G8").value;
		gp[7]=document.getElementById("rGp8").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c9").value);
		gd=document.getElementById("G9").value;
		gp[8]=document.getElementById("rGp9").value=GPs(c,gd);	
	c=parseFloat(document.getElementById("c10").value);
		gd=document.getElementById("G10").value;
		gp[9]=document.getElementById("rGp10").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c11").value);
		gd=document.getElementById("G11").value;
		gp[10]=document.getElementById("rGp11").value=GPs(c,gd);
	c=parseFloat(document.getElementById("c12").value);
		gd=document.getElementById("G12").value;
		gp[11]=document.getElementById("rGp12").value=GPs(c,gd);
 	c=parseFloat(document.getElementById("c13").value);
		gd=document.getElementById("G13").value;
		gp[12]=document.getElementById("rGp13").value=GPs(c,gd);	
	c=parseFloat(document.getElementById("c14").value);
		gd=document.getElementById("G14").value;
		gp[13]=document.getElementById("rGp14").value=GPs(c,gd);	
	c=parseFloat(document.getElementById("c15").value);
		gd=document.getElementById("G15").value;
		gp[14]=document.getElementById("rGp15").value=GPs(c,gd);	
		if(n>=1 || n<=15)
				{ for(i=0;i<n;i++)
				   sumGP=sumGP+gp[i];
				   
				     if(sumGP>=5 && sumGP<6.75)
					document.getElementById("result").value="Second Class";
					else if(sumGP>=6.57 && sumGP<7.75)
					document.getElementById("result").value="First Class Class";
					else if(sumGP>=7.75)
					document.getElementById("result").value="First Class with Distinction*";
					else document.getElementById("result").value="JUST PASS Or Failed!";
					
				   c=document.getElementById("crt2").value
				   c=parseFloat(sumGP/c);
				   document.getElementById("sgpa").value=c;	c=(c-0.75)*10;
				   document.getElementById("per").value=c;
				 }
				 
		else 
		  { window.alert("Error: value entered for number of subjects is incorrect!"); }
 }