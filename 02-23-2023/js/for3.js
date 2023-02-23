document.write("<table border='50'><tr>");
for(var  i=1; i<=20; i++) {
    document.write("<td>");
    for(var y=1; y<=10; y++) {
        document.write(i + "*" + y + "=" + i*y + "<br/>");
    }
    document.write("</td>");
}

document.write("</tr> </table>");