package com.Bitwise.TimeSheet.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.Bitwise.TimeSheet.exception.ResourceNotFound;
import com.Bitwise.TimeSheet.model.Resource;
import com.Bitwise.TimeSheet.model.TimeSheet;

import com.Bitwise.TimeSheet.repository.ResourceRepository;
import com.Bitwise.TimeSheet.repository.TimeSheetRepository;

import com.Bitwise.TimeSheet.service.TimeSheetService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TimeSheetServiceImpl implements TimeSheetService {

	@Autowired
	ResourceRepository tr;
	@Autowired
	TimeSheetRepository hr;

	@Transactional
	@Override
	public Resource saveData(Resource rs) {
		try {
			for (TimeSheet r : rs.getTimesheet()) {
				String f = r.getMonth().toLowerCase();
				r.setMonth(f);
				int sum = r.getWeek1() + r.getWeek2() + r.getWeek3() + r.getWeek4() + r.getWeek5();
				r.setTotal(sum);
				r.setResource(rs);
				hr.save(r);
			}
		} catch (Exception e) {
			return null;
		}

		return tr.save(rs);
	}

	@Override
	public List<TimeSheet> getbymonth(String month) {
		String h = month.toLowerCase();
		return hr.findByMonth(h);
	}

	@Override
	public TimeSheet updatedata(int timeSheetId, TimeSheet s) {
		try {
			s.setTimeSheetId(timeSheetId);
			log.info(s.getResource().getResourceName());
			int sum = s.getWeek1() + s.getWeek2() + s.getWeek3() + s.getWeek4() + s.getWeek5();
			s.setTotal(sum);
			Optional<Resource> res = tr.findById(s.getResource().getResourseId());
			res.get().setTeam(s.getResource().getTeam());
			res.get().setResourceName(s.getResource().getResourceName());
			s.setResource(res.get());
		} catch (Exception e) {
			return null;
		}

		return hr.save(s);
	}

	@Override
	public Optional<TimeSheet> getsingledata(int timeSheetId) {

		return hr.findById(timeSheetId);
	}

	@Override
	public Integer getsum(String month) {
		String h = month.toLowerCase();
		Integer g = hr.totalSum(h);
		log.info("sum " + g);
		return g;
	}

	@Override
	public String deleteByid(int timeSheetId) {

		hr.deleteById(timeSheetId);
		return "deleted";
	}
}
