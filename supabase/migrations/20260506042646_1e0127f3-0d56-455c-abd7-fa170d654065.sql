-- Restrict badge codes and score integrity
ALTER TABLE public.scores
  ADD CONSTRAINT scores_score_within_total CHECK (score >= 0 AND total > 0 AND score <= total),
  ADD CONSTRAINT scores_game_type_valid CHECK (game_type IN ('trang_nguyen','thu_thach'));

ALTER TABLE public.badges
  ADD CONSTRAINT badges_code_valid CHECK (code IN ('trang_nguyen','anh_hung_dan_toc','bach_chien','hoc_gia','tien_si','tinh_thong'));

-- Lock down SECURITY DEFINER helper functions from public/anon execution.
-- handle_new_user is invoked only by an auth trigger; update_updated_at_column only by table triggers.
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;