import java.net.ConnectException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Jdbc {
    public static void main(String[] args) {
        String url="jdbc:mysql://localhost:3306/hotel_management";
        String username="root";
        String password="Vash0699#";
        try{
//            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url,username,password);
//            Statement statement = connection.createStatement();



        }
        catch(Exception e){
            System.out.print(e);
        }
    }
}
