package com.cts.activity.daoimpl;

import java.util.List;



import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.cts.activity.bean.User;
import com.cts.activity.dao.UserDAO;
import com.cts.activity.hibernate.HibernateUtil;

public class UserDAOImpl implements UserDAO{
	
	SessionFactory sessionFactory=HibernateUtil.getSessionFactory();

	@Override
	public boolean saveUser(User user) {
		try {
			Session session=sessionFactory.openSession();
			Transaction tx=session.beginTransaction();
			session.save(user);
			tx.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			System.out.println("Exception: "+e.getMessage());
			return false;
		}
	}

	@Override
	public boolean updateUser(User user) {
		try {
			Session session=sessionFactory.openSession();
			Transaction tx=session.beginTransaction();
			session.update(user);
			tx.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			System.out.println("Exception: "+e.getMessage());
			return false;
		}
	}

	@Override
	public boolean removeUser(User user) {
		try {
			Session session=sessionFactory.openSession();
			Transaction tx=session.beginTransaction();
			session.delete(user);
			tx.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			System.out.println("Exception: "+e.getMessage());
			return false;
		}
	}

	@Override
	public User getUserById(int id) {
		try {
			Session session=sessionFactory.openSession();
			Transaction tx=session.beginTransaction();
			User user=session.get(User.class, id);
			tx.commit();
			session.close();
			return user;
		} catch (HibernateException e) {
			System.out.println("Exception: "+e.getMessage());
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> getAllUsers() {
		try {
			Session session=sessionFactory.openSession();
			Transaction tx=session.beginTransaction();
			List<User> users=session.createQuery("FROM User").list();
			tx.commit();
			session.close();
			return users;
		} catch (HibernateException e) {
			System.out.println("Exception: "+e.getMessage());
			return null;
		}
	}
	
//	@Override
//	public boolean isValidUser(String Username,String password){
//		try {
//		Session session =sessionFactory.openSession();
//		Transaction tx =session.beginTransaction();
//		Query query =session.createQuery("from User where username=:username and password=:password");
//		query.setString("username",username);
//		query.setString("password",password);
//		User user = (User) query.uniqueResult();
//		if(user.getPassword()!= null)
//		{
//			tx.commit();
//			session.close();
//			return true;
//			return false;
//		}
//		}catch(HibernateException e) {
//			e.printStackTrace();
//		}
//		
//		
		
	//}
	
	}


